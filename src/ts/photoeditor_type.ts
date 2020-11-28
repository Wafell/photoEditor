type CommandHistory = {
  undoList: UndoListType[];
  redoList: RedoListType[];
};

type UndoListType = {
  size: SizeType;
  image: ImageType;
  texts: TextType[];
  filter: FilterType[];
  artObjects: ArtObjectType[];
  primitives: PrimitivesType[];
};

type RedoListType = {
  size: SizeType;
  image: ImageType;
  texts: TextType[];
  filter: FilterType[];
  artObjects: ArtObjectType[];
  primitives: PrimitivesType[];
};

type PhotoEditor = {
  canvas: CanvasType;
  currentState: CurrentStateType;
};

type CanvasType = {
  size: SizeType;
  image: ImageType;
  filter: FilterType[];
  texts: TextType[]; //Array<TextType>
  artObjects: ArtObjectType[];
  primitives: PrimitivesType[];
  pixels: PixelType;
};

type CurrentStateType = {
  canvasState: CanvasStateType;
  editorState: EditorStateType;
};

type CanvasStateType = {
  selectedObject:
    | TextType
    | PrimitivesType
    | ArtObjectType
    | SelectionType
    | null; //| ImageType
};

type EditorStateType = {
  textState: TextType;
  filterState: FilterType;
};

type SizeType = {
  height: number;
  width: number;
};

type ImageType = {
  path: string;
  // coordinates: CoordinatesType;
};

type FilterType = string; // = {
//     grey: 'grey'
//     red: 'red'
//     blue: 'blue'
//     green: 'green'
// }

type TextType = {
  value: string;
  size: number;
  color: string;
  font: string;
  coordinates: CoordinatesType;
};

type SelectionType = {
  coordinates: CoordinatesType;
  size: SizeType;
};

type ArtObjectType = {
  size: SizeType;
  coordinates: CoordinatesType;
};

type PrimitivesType = {
  shape: ShapeType;
  contour: ContourType;
  coordinates: CoordinatesType;
  size: SizeType;
  fill: FillType;
};

type ColorType = {
  r: number;
  g: number;
  b: number;
  a: number;
};

type PixelType = Array<Array<ColorType>>;

type FontType = string; //{
//     calibri: 'calibri';
// }

type CoordinatesType = {
  x: number;
  y: number;
};

type ShapeType = {
  shape: "ellipse" | "rectangle" | "triangle";
};

type ContourType = {
  width: number;
  color: ColorType;
};

type FillType = {
  color: ColorType;
};

export type {
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
};
