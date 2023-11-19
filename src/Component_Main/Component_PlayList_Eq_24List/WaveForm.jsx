// WaveForm.jsx

import { useRef, useEffect } from "react";
import animateBars from "./animateBars";

const WaveForm = ({ analyzerData, audioUrl }) => {
    const canvasRef = useRef(null);
    const { dataArray, analyzer, bufferLength } = analyzerData;

    // Waveform을 그리는 함수
    const draw = (dataArray, analyzer, bufferLength) => {
        const canvas = canvasRef.current;
        if (!canvas || !analyzer)
            return;
        const canvasCtx = canvas.getContext("2d");

        // 애니메이션을 적용하여 막대를 그리는 함수 호출
        const animate = () => {
            requestAnimationFrame(animate);
            canvas.width = canvas.width;
            animateBars(analyzer, canvas, canvasCtx, dataArray, bufferLength);
        };

        // 애니메이션 시작
        animate();
    };

    useEffect(() => {
        // 컴포넌트가 렌더링될 때마다 Waveform을 그리는 함수 호출
        draw(dataArray, analyzer, bufferLength);
    }, [dataArray, analyzer, bufferLength]);

    return (
        // 캔버스 엘리먼트 반환
        <canvas
            style={{
                position: "absolute",
                top: "0",
                left: "0",
                zIndex: "-10"
            }}
            ref={canvasRef}
            width={window.innerWidth}
            height={window.innerHeight} />
    );
};

export default WaveForm;