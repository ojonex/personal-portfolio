const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h1", {}, props.animal),
    React.createElement("h1", {}, props.breed),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Whats going on gamers"),
    React.createElement(Pet, {
      name: "Harry",
      animal: "dinosaur",
      breed: "t-rex",
    }),
    React.createElement(Pet, {
      name: "Harry",
      animal: "dinosaur",
      breed: "t-rex",
    }),
    React.createElement(Pet, {
      name: "Harry",
      animal: "dinosaur",
      breed: "t-rex",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
