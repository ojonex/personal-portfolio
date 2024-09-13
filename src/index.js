const Pet = () => {
    return React.createElement(
        "div", {}, [
            React.createElement("h1", {}, "Harley"),
            React.createElement("h1", {}, "Dog"),
            React.createElement("h1", {}, "Husky x Collie"),

        ]
    )
}
const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Whats going on gamers"),
            React.createElement(Pet),
            React.createElement(Pet),
            React.createElement(Pet),
        ]

    )
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));