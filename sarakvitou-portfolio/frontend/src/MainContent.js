import React from "react";
import "./MainContent.css";
import { StylesProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const MY_NAME = "Sarakvitou Sam";

function MainContent() {
  return (
    <StylesProvider injectFirst>
      <div className="MainContent-Body">
        <Paper elevation={10} className="MainContent-Card">
          <header className="MainContent-Header">{MY_NAME}</header>
        </Paper>
      </div>
    </StylesProvider>
  );
}

export default MainContent;
