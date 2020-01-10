import React from "react";
import {
  render
} from "react-dom";
import Pet from "./Pet";

const App = () => {
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
};

render(React.createElement(App), document.getElementById("root"));