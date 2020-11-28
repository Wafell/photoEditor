import {
  PhotoEditor,
  CanvasType,
  SizeType,
  ImageType,
  FilterType,
  TextType,
  SelectionType,
  ArtObjectType,
  PrimitivesType,
  ColorType,
  FontType,
  CoordinatesType,
  ShapeType,
  ContourType,
  FillType
} from "../ts/photoeditor_type";

import React, { useEffect, useRef } from "react";

// interface CanvasProps {
//   width: number;
//   height: number;
// }

// function Canvas(props: CanvasProps) {
//   let canvasRef = useRef<HTMLCanvasElement | null>(null);
//   let canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

//   useEffect(() => {
//     if (canvasRef.current) {
//       canvasCtxRef.current = canvasRef.current.getContext("2d");
//       let ctx = canvasCtxRef.current;
//     }
//   });

//   return (
//     <canvas ref={canvasRef} width={props.width} height={props.height}></canvas>
//   );
// }

// export { Canvas };

function drawRectangle(ctx: any, currObj: PrimitiveType) {
  ctx.fillRect(
    currObj.topLeft.x,
    currObj.topLeft.y,
    currObj.size.w,
    currObj.size.h
  );
  if (currObj.border)
    ctx.strokeRect(
      currObj.topLeft.x,
      currObj.topLeft.y,
      currObj.size.w,
      currObj.size.h
    );
}

function drawTriangle(ctx: any, currObj: PrimitivesType) {
  ctx.beginPath();
  ctx.moveTo(
    currObj.coordinates.x + currObj.size.width / 2,
    currObj.coordinates.y
  );
  ctx.lineTo(
    currObj.coordinates.x + currObj.size.width,
    currObj.coordinates.y + currObj.size.height
  );
  ctx.lineTo(
    currObj.coordinates.x,
    currObj.coordinates.y + currObj.size.height
  );
  ctx.closePath();
  ctx.fill();
  if (currObj.contour) ctx.stroke();
}

function drawEllipse(ctx: any, currObj: PrimitivesType) {
  ctx.beginPath();
  ctx.ellipse(
    currObj.coordinates.x + currObj.size.width / 2,
    currObj.coordinates.y + currObj.size.height / 2,
    currObj.size.width / 2,
    currObj.size.height / 2,
    0,
    0,
    2 * Math.PI
  );
  ctx.closePath();
  ctx.fill();
  if (currObj.contour) ctx.stroke();
}

// function drawText(ctx: any, currObj: PrimitivesType) {
//   ctx!.fillStyle = `rgba(${currObj.color.r},${currObj.color.g},${currObj.color.b},${currObj.color.a})`;
//   ctx.font = `${currObj.fontSize}px ${currObj.font}`;
//   ctx.fillText(currObj.value, currObj.topLeft.x, currObj.topLeft.y);
// }

interface CanvasProps {
  canvas: CanvasType;
  currObj: TextType | PrimitivesType | SelectionType | ImageType | null;
}

function Canvas(props: CanvasProps) {
  let canvasRef = useRef<HTMLCanvasElement | null>(null);
  let canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext("2d");
      let ctx = canvasCtxRef.current;
      let pixel: ImageData = ctx!.createImageData(1, 1);
      for (let i = 0; i < editor.canvas.size.height; i++) {
        for (let j = 0; j < editor.canvas.size.width; j++) {
          pixel.data[0] = props.canvas.pixels[i][j].r;
          pixel.data[1] = props.canvas.pixels[i][j].g;
          pixel.data[2] = props.canvas.pixels[i][j].b;
          pixel.data[3] = props.canvas.pixels[i][j].a;
          ctx!.putImageData(pixel, j, i);
        }
      }
      if (props.currObj) {
        if (props.currObj.shape) {
          ctx!.fillStyle = `rgba(${props.currObj.fill.r},${props.currObj.fill.g},${props.currObj.fill.b},${props.currObj.fill.a})`;
          if (props.currObj.border) {
            ctx!.strokeStyle = `rgba(${props.currObj.border!.color.r},${
              props.currObj.border!.color.g
            },${props.currObj.border!.color.b},${
              props.currObj.border!.color.a
            })`;
            ctx!.lineWidth = props.currObj.border.width;
          }
          if (props.currObj.shape === "rectangle")
            drawRectangle(ctx, props.currObj);
          if (props.currObj.shape === "triangle")
            drawTriangle(ctx, props.currObj);
          if (props.currObj.shape === "ellipse")
            drawEllipse(ctx, props.currObj);
        }
        // if (props.currObj.font) drawText(ctx, props.currObj);
      }
    }
  });

  return (
    <canvas
      ref={canvasRef}
      width={props.canvas.size.width}
      height={props.canvas.size.height}
      id="Canvas"
    ></canvas>
  );
}

export { Canvas };
