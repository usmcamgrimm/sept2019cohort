import React from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1 id="something-important">Adopt Me</h1>
        {/*
      <Pet name="Jezebel" animal="Cat" breed="Persian" />
      <Pet name="Jins" animal="Cat" breed="Himalayan" />
      <Pet name="Brutus" animal="Dog" breed="Mastiff" />
      */}
        <SearchParams />
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
