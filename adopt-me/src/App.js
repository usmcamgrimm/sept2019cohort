import React from "react";
import { render } from "react-dom";

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {
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
