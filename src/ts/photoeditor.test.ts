// const testCases = [
//     {
//         description:  'test 1',
//         inputEditor: {

//         },
//         expectedEditor: {

//         }
//     }
// ]

// for (const testCase of testCases)
// {
//     test(testCase.description, () => {
//         expect(createNewCanvas(testCase.inputEditor)).toEqual(testCase.expectedEditor)
//     })
// }
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

test("create canvas expect new canvas with valid data", () => {
  const photoEditor: PhotoEditor = {
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
  const newEditor = createNewCanvas(photoEditor);

  const expectedEditor: PhotoEditor = {
    canvas: {
      size: {
        height: 600,
        width: 800
      },
      image: null,
      filter: [],
      texts: [],
      artObjects: [],
      primitives: []
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

  expect(newEditor).toEqual(expectedEditor);
});

test("add image expect new image with valid data", () => {
  const image: ImageType = {
    path: "C:UsersAl1naDocumentsФИЗИКАгаусс"
  };

  const photoEditor: PhotoEditor = {
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

  const newEditor = addImage(photoEditor, image);

  const expectedEditor: PhotoEditor = {
    canvas: {
      size: {
        height: 150,
        width: 150
      },
      image: {
        path: "C:UsersAl1naDocumentsФИЗИКАгаусс"
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

  expect(newEditor).toEqual(expectedEditor);
});

test("change canvas size", () => {
  const width: number = 400;
  const height: number = 400;

  const photoEditor: PhotoEditor = {
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

  const newEditor = changeCanvasSize(photoEditor, width, height);

  const expectedEditor: PhotoEditor = {
    canvas: {
      size: {
        height: 400,
        width: 400
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

  expect(newEditor).toEqual(expectedEditor);
});

test("select area", () => {
  const selection: SelectionType = {
    coordinates: {
      x: 200,
      y: 200
    },
    size: {
      width: 200,
      height: 200
    }
  };

  const photoEditor: PhotoEditor = {
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

  const newEditor = selectArea(photoEditor, selection);

  const expectedEditor: PhotoEditor = {
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
            x: 200,
            y: 200
          },
          size: {
            width: 200,
            height: 200
          }
        }
      }
    }
  };

  expect(newEditor).toEqual(expectedEditor);
});

test("move select area", () => {
  const x2: number = 400;
  const y2: number = 400;

  const photoEditor: PhotoEditor = {
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

  const newEditor = moveSelectionArea(photoEditor, x2, y2);

  const expectedEditor: PhotoEditor = {
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
            x: 400,
            y: 400
          },
          size: {
            width: 150,
            height: 150
          }
        }
      }
    }
  };

  expect(newEditor).toEqual(expectedEditor);
});

test("delete area", () => {
  const photoEditor: PhotoEditor = {
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

  const newEditor = deleteArea(photoEditor);

  const expectedEditor: PhotoEditor = {
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
        selectedObject: null
      }
    }
  };

  expect(newEditor).toEqual(expectedEditor);
});

test("add filter", () => {
  const filter: FilterType = "blue";

  const photoEditor: PhotoEditor = {
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

  const newEditor = addFilter(photoEditor, filter);

  const expectedEditor: PhotoEditor = {
    canvas: {
      size: {
        height: 150,
        width: 150
      },
      image: {
        path: "D/photo.png"
      },
      filter: ["green", "blue"],
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

  expect(newEditor).toEqual(expectedEditor);
});

test("add text", () => {
  const text: TextType = {
    value: "what is popping",
    size: 17,
    color: "red",
    font: "calibri",
    coordinates: {
      x: 200,
      y: 200
    }
  };

  const photoEditor: PhotoEditor = {
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

  const newEditor = addText(photoEditor, text);

  const expectedEditor: PhotoEditor = {
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
        },
        {
          value: "what is popping",
          size: 17,
          color: "red",
          font: "calibri",
          coordinates: {
            x: 200,
            y: 200
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

  expect(newEditor).toEqual(expectedEditor);
});

test("add primitive", () => {
  const primitive: PrimitivesType = {
    shape: "square",
    contour: {
      width: 2,
      color: "green"
    },
    coordinates: {
      x: 200,
      y: 200
    },
    size: {
      height: 200,
      width: 200
    },
    fill: {
      color: "black"
    }
  };

  const photoEditor: PhotoEditor = {
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

  const newEditor = addPrimitive(photoEditor, primitive);

  const expectedEditor: PhotoEditor = {
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
        },
        {
          shape: "square",
          contour: {
            width: 2,
            color: "green"
          },
          coordinates: {
            x: 200,
            y: 200
          },
          size: {
            height: 200,
            width: 200
          },
          fill: {
            color: "black"
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

  expect(newEditor).toEqual(expectedEditor);
});

test("add art object", () => {
  const artObject: ArtObjectType = {
    size: {
      height: 200,
      width: 200
    },
    coordinates: {
      x: 20,
      y: 20
    }
  };

  const photoEditor: PhotoEditor = {
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

  const newEditor = addArtObject(photoEditor, artObject);

  const expectedEditor: PhotoEditor = {
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
        },
        {
          size: {
            height: 200,
            width: 200
          },
          coordinates: {
            x: 20,
            y: 20
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

  expect(newEditor).toEqual(expectedEditor);
});

test("import image", () => {
  const image: ImageType = {
    path: "C:UsersAl1naDocumentsФИЗИКАгаусс"
  };

  const photoEditor: PhotoEditor = {
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

  const newEditor = importImage(photoEditor, image);

  const expectedEditor: PhotoEditor = {
    canvas: {
      size: {
        height: 150,
        width: 150
      },
      image: {
        path: "C:UsersAl1naDocumentsФИЗИКАгаусс"
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

  expect(newEditor).toEqual(expectedEditor);
});

test("undo", () => {
  const commandHistory: CommandHistory = {
    undoList: [
      {
        size: {
          width: 200,
          height: 200
        },
        image: null,
        texts: [
          {
            value: "Hello world",
            size: 14,
            color: "black",
            font: "calibri",
            coordinates: {
              x: 150,
              y: 150
            }
          }
        ],
        filter: ["green"],
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
            shape: "square",
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
      {
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
      }
    ],
    redoList: null
  };

  const photoEditor: PhotoEditor = {
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

  const newEditor = undo(photoEditor, commandHistory);

  const expectedEditor: PhotoEditor = {
    canvas: {
      size: {
        height: 200,
        width: 200
      },
      image: null,
      filter: ["green"],
      texts: [
        {
          value: "Hello world",
          size: 14,
          color: "black",
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
          shape: "square",
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

  expect(newEditor).toEqual(expectedEditor);
});

test("redo", () => {
  const commandHistory: CommandHistory = {
    redoList: [
      {
        size: {
          width: 200,
          height: 200
        },
        image: null,
        texts: [
          {
            value: "Hello world",
            size: 14,
            color: "black",
            font: "calibri",
            coordinates: {
              x: 150,
              y: 150
            }
          }
        ],
        filter: ["green"],
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
            shape: "square",
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
      }
    ],
    undoList: null
  };

  const photoEditor: PhotoEditor = {
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

  const newEditor = redo(photoEditor, commandHistory);

  const expectedEditor: PhotoEditor = {
    canvas: {
      size: {
        height: 200,
        width: 200
      },
      image: null,
      filter: ["green"],
      texts: [
        {
          value: "Hello world",
          size: 14,
          color: "black",
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
          shape: "square",
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

  expect(newEditor).toEqual(expectedEditor);
});

test("add undo", () => {
  const commandHistory: CommandHistory = {
    undoList: [
      {
        size: {
          width: 200,
          height: 200
        },
        image: null,
        texts: [
          {
            value: "Hello world",
            size: 14,
            color: "black",
            font: "calibri",
            coordinates: {
              x: 150,
              y: 150
            }
          }
        ],
        filter: ["green"],
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
            shape: "square",
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
      }
    ],
    redoList: null
  };

  const photoEditor: PhotoEditor = {
    canvas: {
      size: {
        height: 200,
        width: 200
      },
      image: null,
      filter: ["pink"],
      texts: [
        {
          value: "Hello world",
          size: 14,
          color: "black",
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
          shape: "square",
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

  const expectedCommandHistory: CommandHistory = {
    undoList: [
      {
        size: {
          width: 200,
          height: 200
        },
        image: null,
        texts: [
          {
            value: "Hello world",
            size: 14,
            color: "black",
            font: "calibri",
            coordinates: {
              x: 150,
              y: 150
            }
          }
        ],
        filter: ["green"],
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
            shape: "square",
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
      {
        size: {
          height: 200,
          width: 200
        },
        image: null,
        filter: ["pink"],
        texts: [
          {
            value: "Hello world",
            size: 14,
            color: "black",
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
            shape: "square",
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
      }
    ],
    redoList: null
  };

  const newCommandHistory = addUndo(photoEditor, commandHistory);

  expect(newCommandHistory).toEqual(expectedCommandHistory);
});

test("add redo", () => {
  const commandHistory: CommandHistory = {
    redoList: [
      {
        size: {
          width: 200,
          height: 200
        },
        image: null,
        texts: [
          {
            value: "Hello world",
            size: 14,
            color: "black",
            font: "calibri",
            coordinates: {
              x: 150,
              y: 150
            }
          }
        ],
        filter: ["green"],
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
            shape: "square",
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
      }
    ],
    undoList: null
  };

  const photoEditor: PhotoEditor = {
    canvas: {
      size: {
        height: 200,
        width: 200
      },
      image: null,
      filter: ["pink"],
      texts: [
        {
          value: "Hello world",
          size: 14,
          color: "black",
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
          shape: "square",
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

  const expectedCommandHistory: CommandHistory = {
    redoList: [
      {
        size: {
          width: 200,
          height: 200
        },
        image: null,
        texts: [
          {
            value: "Hello world",
            size: 14,
            color: "black",
            font: "calibri",
            coordinates: {
              x: 150,
              y: 150
            }
          }
        ],
        filter: ["green"],
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
            shape: "square",
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
      {
        size: {
          height: 200,
          width: 200
        },
        image: null,
        filter: ["pink"],
        texts: [
          {
            value: "Hello world",
            size: 14,
            color: "black",
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
            shape: "square",
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
      }
    ],
    undoList: null
  };

  const newCommandHistory = addRedo(photoEditor, commandHistory);

  expect(newCommandHistory).toEqual(expectedCommandHistory);
});
