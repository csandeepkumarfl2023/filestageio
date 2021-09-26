import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Todos from "./Todos";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <DndProvider backend={HTML5Backend}>
      <Todos />
    </DndProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
