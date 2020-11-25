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

function deepFreeze(o) {
  Object.freeze(o);

  Object.getOwnPropertyNames(o).forEach(function (prop) {
    if (
      o.hasOwnProperty(prop) &&
      o[prop] !== null &&
      (typeof o[prop] === "object" || typeof o[prop] === "function") &&
      !Object.isFrozen(o[prop])
    ) {
      deepFreeze(o[prop]);
    }
  });

  return o;
}

function createNewCanvas(editor: PhotoEditor): PhotoEditor {
  deepFreeze(editor);
  return {
    ...editor,
    canvas: {
      ...editor.canvas,
      size: {
        ...editor.canvas.size,
        height: 600,
        width: 800
      },
      image: null,
      filter: [],
      texts: [],
      artObjects: [],
      primitives: []
    }
  };
}

function addImage(editor: PhotoEditor, image: ImageType): PhotoEditor {
  deepFreeze(editor);
  return {
    ...editor,
    canvas: {
      ...editor.canvas,
      image: image
    }
  };
}

function changeCanvasSize(
  editor: PhotoEditor,
  width: number,
  height: number
): PhotoEditor {
  deepFreeze(editor);
  return {
    ...editor,
    canvas: {
      ...editor.canvas,
      size: {
        ...editor.canvas.size,
        height: height,
        width: width
      }
    }
  };
}

function selectArea(
  editor: PhotoEditor,
  selection: SelectionType
): PhotoEditor {
  deepFreeze(editor);
  return {
    ...editor,
    currentState: {
      ...editor.currentState,
      canvasState: {
        ...editor.currentState.canvasState,
        selectedObject: selection
      }
    }
  };
}

function moveSelectionArea(
  editor: PhotoEditor,
  x2: number,
  y2: number
): PhotoEditor {
  deepFreeze(editor);
  return {
    ...editor,
    currentState: {
      ...editor.currentState,
      canvasState: {
        ...editor.currentState.canvasState,
        selectedObject: {
          ...editor.currentState.canvasState.selectedObject,
          coordinates: {
            ...editor.currentState.canvasState.selectedObject.coordinates,
            x: x2,
            y: y2
          }
        }
      }
    }
  };
}

function deleteArea(editor: PhotoEditor): PhotoEditor {
  deepFreeze(editor);
  return {
    ...editor,
    currentState: {
      ...editor.currentState,
      canvasState: {
        ...editor.currentState.canvasState,
        selectedObject: null
      }
    }
  };
}

function addFilter(editor: PhotoEditor, filter: FilterType): PhotoEditor {
  deepFreeze(editor);
  return {
    ...editor,
    canvas: {
      ...editor.canvas,
      filter: [...editor.canvas.filter, filter]
    }
  };
}

function addText(editor: PhotoEditor, text: TextType): PhotoEditor {
  deepFreeze(editor);
  return {
    ...editor,
    canvas: {
      ...editor.canvas,
      texts: [...editor.canvas.texts, text]
    }
  };
}

function addPrimitive(
  editor: PhotoEditor,
  primitive: PrimitivesType
): PhotoEditor {
  deepFreeze(editor);
  return {
    ...editor,
    canvas: {
      ...editor.canvas,
      primitives: [...editor.canvas.primitives, primitive]
    }
  };
}

function addArtObject(
  editor: PhotoEditor,
  artObject: ArtObjectType
): PhotoEditor {
  deepFreeze(editor);
  return {
    ...editor,
    canvas: {
      ...editor.canvas,
      artObjects: [...editor.canvas.artObjects, artObject]
    }
  };
}

function importImage(editor: PhotoEditor, image: ImageType): PhotoEditor {
  deepFreeze(editor);
  return {
    ...editor,
    canvas: {
      ...editor.canvas,
      image
    }
  };
}

function exportCanvas(canvas: CanvasType, path: string): ImageType {
  let image: ImageType;
  image.path = path;
  return image;
}

function undo(
  editor: PhotoEditor,
  commandHistory: CommandHistory
): PhotoEditor {
  deepFreeze(editor);
  let index: number = commandHistory.undoList.length - 2;
  return {
    ...editor,
    canvas: {
      ...editor.canvas,
      size: commandHistory.undoList[index].size,
      image: commandHistory.undoList[index].image,
      texts: commandHistory.undoList[index].texts,
      artObjects: commandHistory.undoList[index].artObjects,
      primitives: commandHistory.undoList[index].primitives
    }
  };
}

function redo(
  editor: PhotoEditor,
  commandHistory: CommandHistory
): PhotoEditor {
  deepFreeze(editor);
  let index: number = commandHistory.redoList.length - 1;
  return {
    ...editor,
    canvas: {
      ...editor.canvas,
      size: commandHistory.redoList[index].size,
      image: commandHistory.redoList[index].image,
      texts: commandHistory.redoList[index].texts,
      artObjects: commandHistory.redoList[index].artObjects,
      primitives: commandHistory.redoList[index].primitives
    }
  };
}

function addUndo(
  editor: PhotoEditor,
  commandHistory: CommandHistory
): CommandHistory {
  let index: number = commandHistory.undoList.length;
  commandHistory.undoList[index] = editor.canvas;

  return commandHistory;
}

function addRedo(
  editor: PhotoEditor,
  commandHistory: CommandHistory
): CommandHistory {
  let index: number = commandHistory.redoList.length;
  commandHistory.redoList[index] = editor.canvas;

  return commandHistory;
}

export {
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
};
