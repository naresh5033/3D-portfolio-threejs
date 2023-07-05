import { Html, useProgress } from "@react-three/drei";


// this file is a canvas loader, where we use the react three drei to load our canvas
const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {/* we wana show the loading percentage before our model shows up */}
        {progress.toFixed(2)}% 
      </p>
    </Html>
  );
};

export default CanvasLoader;
