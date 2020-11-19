function createNewCanvas(editor: photoEditor): photoEditor {
    editor.canvas
    editor.canvas.size: sizeType;
    editor.canvas.image: imageType;
    editor.canvas.filter: filterType;
    editor.canvas.text: textType;
    editor.canvas.selection: selectionType;
    editor.canvas.artObjects: artObjectType;
    editor.canvas.primitives: primitivesType;   
    return editor
}

function addImage(editor: photoEditor, image: imageType): photoEditor {
    return editor
} 
  
function changeCanvasSize(editor: photoEditor, width: number, height: number): photoEditor {
    return editor
}
  
function selectArea(editor: photoEditor, selection: selectionType): photoEditor {
    return editor
}
  
function moveSelectionArea(editor: photoEditor, x2: number, y2: number): photoEditor {
    return editor
}
  
function deleteArea(editor: photoEditor): photoEditor {
    return editor
}
  
function addFilter(editor: photoEditor, filterColor: filterType): photoEditor {
    return editor
}
  
function addText(editor: photoEditor, text: textType): photoEditor {
    return editor
}
  
function addPrimitive(editor: photoEditor, primitive: primitivesType): photoEditor {
    return editor
}
  
function addArtObject(editor: photoEditor, artObject: artObjectType): photoEditor {
    return editor
}
  
function import(editor: photoEditor, image: imageType): photoEditor {
    return editor
}
  
function export(canvas: canvasType): pictureType {
    return //file
}
   
function undo(editor: photoEditor, commandHistory: commandHistory): photoEditor {
    return editor
} 
  
function redo(editor: photoEditor, commandHistory: commandHistory): photoEditor {
    return editor
} 