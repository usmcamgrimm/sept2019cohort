import React from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  /*
  return React.createElement(
    "div", {
      id: "something-important"
    },
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Jinx",
        animal: "Cat",
        breed: "Himalayan"
      }),
      React.createElement(Pet, {
        name: "Jezebel",
        animal: "Cat",
        breed: "Persian"
      }),
      React.createElement(Pet, {
        name: "Brutus",
        animal: "Dog",
        breed: "Mastiff"
      })
    ]
  );
  */
  return (
    <div>
      <h1 id="something-important">Adopt Me</h1>
      {/*}
      <Pet name="Jezebel" animal="Cat" breed="Persian" />
      <Pet name="Jins" animal="Cat" breed="Himalayan" />
      <Pet name="Brutus" animal="Dog" breed="Mastiff" />
      */}
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
