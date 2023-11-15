//Single structure
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world form React!"
// );
// console.log(heading);
// const tag = ReactDOM.createRoot(document.getElementById("root"));
// tag.render(heading);

//Nested structure
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "I am a H1 tag"),
    React.createElement("h2", { id: "heading" }, "I am a H2  tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "I am a H1 tag"),
    React.createElement("h2", { id: "heading" }, "I am a H2  tag"),
  ]),
]);
const tag = ReactDOM.createRoot(document.getElementById("root"));
tag.render(parent);
