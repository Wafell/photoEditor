type commandHistory = {
    undoList: undoListType;
    redoList: redoListType;
}

type photoEditor = {
    canvas: canvasType;
    currentState: currentStateType;
}

type canvasType = {
    size: sizeType;
    image: imageType;
    filter: filterType;
    text: textType;
    selection: selectionType;
    artObjects: artObjectType;
    primitives: primitivesType;    
}

type currentStateType = {
    filterState: filterType;
    textState: textType;
    currentCanvasId: currentCanvasIdType; 
    selectionState: selectionType;   
}

type sizeType = {
    height: number;
    width: number;
}

type imageType = {
    path: 'D/photo.png'
}

type filterType = {
    grey: 'grey'
    red: 'red'
    blue: 'blue'
    green: 'green'
}

type textType = {
    value: string;
    size: number;
    color: colorType;
    font: fontType;
    coordinates: coordinatesType; 
}

type selectionType = {
    coordinates: coordinatesType;
    size: sizeType;
}

type artObjectType = {
    size: sizeType;
    coordinates: coordinatesType;
}

type primitivesType = {
    shape: shapeType;  
    contour: contourType;
    coordinates: coordinatesType;
    size: sizeType;
    fill: fillType;
}

type currentCanvasIdType = {
    id: number; //or string
}

type colorType = {
    grey: 'grey';
    red: 'red';
    blue: 'blue';
    green: 'green';
    yellow: 'yellow';
    pink: 'pink';
    purple: 'purple';
    orange: 'orange';
}

type fontType = {
    calibri: 'calibri';
}

type coordinatesType = {
    x: number;
    y: number;
}

type shapeType = {
    circle: 'circle';
    triangle: 'triangle';
    square: 'square';
}

type contourType = {
    width: number;
    color: colorType;
}

type fillType = {
    color: colorType;
}