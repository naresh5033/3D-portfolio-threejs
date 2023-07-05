import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

// the 3d ball canvas that we used in the skills section
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]); // destructure the decal from useTexture()
// the imgUrl are coming from the technology.icon(ballCanvas) in tech

// lets make the balls float
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        {/* the icosahedronGeometry(radius: float, detail: int), refer the polyHedronGeometry class for the base props */}
        <icosahedronGeometry args={[1, 1]} />

        {/* lets add some material to the icosahedronGeometry */}
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]} // since they re mirrored horizontally, we wanna mirror em for one more time.
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return ( // the Canvas is like exactly the same as we use in the computer sec so grab and put it here
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
