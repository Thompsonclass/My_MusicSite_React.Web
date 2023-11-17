// WaveForm.jsx

import { useRef, useEffect } from "react";
import animateBars from "./animateBars";

const WaveForm = ({ analyzerData, audioUrl }) => {
  const canvasRef = useRef(null);
  const { dataArray, analyzer, bufferLength } = analyzerData;

  const draw = (dataArray, analyzer, bufferLength) => {
    const canvas = canvasRef.current;
    if (!canvas || !analyzer) return;
    const canvasCtx = canvas.getContext("2d");

    const animate = () => {
      requestAnimationFrame(animate);
      canvas.width = canvas.width;
      animateBars(analyzer, canvas, canvasCtx, dataArray, bufferLength);
    };

    animate();
  };

  useEffect(() => {
    draw(dataArray, analyzer, bufferLength);
  }, [dataArray, analyzer, bufferLength]);

  return (
    <canvas
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: "-10"
      }}
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};

export default WaveForm;
