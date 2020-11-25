import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { Button, ToolButton } from "./modules/Button";
import { Canvas } from "./modules/Canvas";
import { photoEditor } from "./ts/NewPhotoEditor";

function App() {
  return (
    <div className="App">
      <div className="TopPanel">
        <div>
          <Button text={"File"} />
        </div>
        <div>
          <Button text={"Undo"} />
        </div>
        <div>
          <Button text={"Redo"} />
        </div>
        <div>
          <Button text={"Palette"} />
        </div>
      </div>

      <div className="Some">
        <div className="ToolBar">
          <ToolButton text={"Cut"} />
          <ToolButton text={"Rectangle"} />
          <ToolButton text={"Circle"} />
          <ToolButton text={"Triangle"} />
          <ToolButton text={"Text"} />
          <ToolButton text={"Filter"} />
          <ToolButton text={"Select"} />
          <ToolButton text={"ArtObject"} />
        </div>
        <div className="Canvas">
          <Canvas width={800} height={600} />
        </div>
      </div>
    </div>
  );
}

export default App;
