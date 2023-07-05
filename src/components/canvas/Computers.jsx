import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber"; // the canvas is just an empty canvas that allow us to place something on it.
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"; // this libs will allow us to import 3d models and help us to draw in the canvas

import CanvasLoader from "../Loader";

//lets bring in our 3d model with the help of useGLTF()
const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return ( 
    // firstly inorder to start the 3js elems we ve to use mesh tag not he div and then the light tag otherwise we can't see the objs 
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight // this spotlight is the main light, and we can see as soon as we set the position vals everything will get brighter 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1} //Percent of the spotlight cone that is attenuated due to penumbra. Takes values between zero and 1. Default is zero.
        intensity={1} // and for the other prop vals refer the doc
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75} //the size of our obj
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false); // for the mobile dev br pt

  useEffect(() => {
    // Add a listener for changes to the screen size (specially for the mob dev)
    const mediaQuery = window.matchMedia("(max-width: 500px)"); // if the window matches the media query 500px then we know its the mobile 

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query (whenever the width changes)
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query 
    // withing the useEffect we ve to add the add the event listener and them remove it 
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }} // the camera is imp part, which says where are we looking at our model from. the position of the x,y,z axis and the field of view fov correspondingly.
      gl={{ preserveDrawingBuffer: true }} // this val needs to be there to properly render our model
    >
  {/* this suspense from react will allow us to ve the loader while our model is loading  */}
      <Suspense fallback={<CanvasLoader />}> 
        <OrbitControls // this contrls will allow us to move our model from left to right 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2} //the polar angle will prevent the model to rotate all the way up to up and down, left and right instead it will only allow us to rotate the model only in a specific angle.
          minPolarAngle={Math.PI / 2} // around the specific axis
        />
        {/* since we added the mobile br pt use effect lets pass the state(isMobile) as the props in computer comp on top and set that to isMobile */}
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
