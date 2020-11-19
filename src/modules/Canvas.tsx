import React, { useEffect, useRef } from 'react';

interface CanvasProps {
    width: number,
    height: number,
}

function Canvas(props: CanvasProps) {
    let canvasRef = useRef<HTMLCanvasElement | null>(null);
    let canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);
     
    useEffect(() => {
      if (canvasRef.current) {
        canvasCtxRef.current = canvasRef.current.getContext('2d');
        let ctx = canvasCtxRef.current;
      }
    });
    
    return (
        <canvas ref={canvasRef} width={props.width} height={props.height}></canvas>
    )
}


export {
    Canvas,
}