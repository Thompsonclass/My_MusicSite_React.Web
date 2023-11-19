// useSize.js

import { useCallback, useEffect, useState } from 'react';

// 윈도우 크기를 감지하여 width와 height를 반환하는 훅
const useSize = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    // 윈도우 크기를 갱신하는 함수
    const setSizes = useCallback(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }, [setWidth, setHeight]);

    // 컴포넌트가 처음 마운트되거나 윈도우 크기가 변경될 때 이벤트 리스너 등록
    useEffect(() => {
        window.addEventListener('resize', setSizes);
        setSizes(); // 처음 마운트될 때 크기 설정
        return () => window.removeEventListener('resize', setSizes); // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    }, [setSizes]);

    // 현재 윈도우의 width와 height 반환
    return [width, height];
};

export default useSize;
