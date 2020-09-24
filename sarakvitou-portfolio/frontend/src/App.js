import React from "react";
import MainContent from "./MainContent";
import "./App.css";

function App() {
  const FOOTER_STRING = "Designed By Sarakvitou Sam";
  return (
    <div className="App">
      <MainContent></MainContent>
      <footer
        className="App-footer"
        style={{ paddingLeft: FOOTER_STRING.innerWidth }}
      >
        {FOOTER_STRING}
      </footer>
    </div>
  );
}

export default App;
