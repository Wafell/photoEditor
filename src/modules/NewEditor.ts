import { createNewCanvas, addPrimitive, addText } from "../ts/photoeditor";
import { PhotoEditor, PrimitivesType, TextType } from "../ts/photoeditor_type";

const undoStack: Array<PhotoEditor> = [];
const redoStack: Array<PhotoEditor> = [];

let editor: PhotoEditor = {
  canvas: {
    size: { width: 0, height: 0 },
    pixels: []
  },
  currentObject: null
};

editor = createNewCanvas(editor);

const primitive: PrimitivesType = {
  shape: {
    shape: "ellipse"
  },
  fill: {
    color: {
      r: 232,
      g: 49,
      b: 107,
      a: 255
    }
  },
  contour: {
    color: {
      r: 68,
      g: 227,
      b: 103,
      a: 255
    },
    width: 5
  },
  size: {
    width: 200,
    height: 100
  },
  coordinates: {
    x: 300,
    y: 300
  }
};

editor = addPrimitive(editor, primitive);

export { editor };
