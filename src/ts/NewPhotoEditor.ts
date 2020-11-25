import {
  CommandHistory,
  UndoListType,
  RedoListType,
  PhotoEditor,
  CanvasType,
  CanvasStateType,
  EditorStateType,
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
} from "./photoeditor_type";

import {
  createNewCanvas,
  addImage,
  changeCanvasSize,
  selectArea,
  moveSelectionArea,
  deleteArea,
  addFilter,
  addText,
  addPrimitive,
  addArtObject,
  importImage,
  exportCanvas,
  undo,
  redo,
  addUndo,
  addRedo
} from "./photoeditor";

let photoEditor: PhotoEditor = {
  canvas: {
    size: {
      height: 150,
      width: 150
    },
    image: {
      path: "D/photo.png"
    },
    filter: ["green"],
    texts: [
      {
        value: "Hello world",
        size: 14,
        color: "pink",
        font: "calibri",
        coordinates: {
          x: 150,
          y: 150
        }
      }
    ],
    artObjects: [
      {
        size: {
          height: 150,
          width: 150
        },
        coordinates: {
          x: 15,
          y: 15
        }
      }
    ],
    primitives: [
      {
        shape: "circle",
        contour: {
          width: 2,
          color: "red"
        },
        coordinates: {
          x: 15,
          y: 15
        },
        size: {
          height: 150,
          width: 150
        },
        fill: {
          color: "green"
        }
      }
    ]
  },
  currentState: {
    editorState: {
      filterState: "green",
      textState: {
        size: 14,
        color: "black",
        font: "calibri",
        value: "Hello world",
        coordinates: {
          x: 150,
          y: 150
        }
      }
    },
    canvasState: {
      selectedObject: {
        coordinates: {
          x: 150,
          y: 150
        },
        size: {
          width: 150,
          height: 150
        }
      }
    }
  }
};

export { photoEditor };
