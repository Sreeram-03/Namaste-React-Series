// {/* <div id="parent">
//     <div id="child">
//  <h1>I'm h1 tag</h1>   only one child-direct single
//  <h1>I'm h2 tag</h1>   siblings-array
//     </div>
// </div> */}
// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" }), [React.createElement("h1", {}, "I'm h1 tag!"),
//     React.createElement("h1", {}, "I'm h2 tag!")]
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

{
  /* <div id="parent">
    <div id="child1">
 <h1>I'm h1 tag</h1>   only one child-direct single
 <h1>I'm h2 tag</h1>   siblings-array
    </div>
        <div id="child2">
 <h1>I'm h1 tag</h1>   only one child-direct single
 <h1>I'm h2 tag</h1>   siblings-array
    </div>
</div> */
}
//ugly
//JSX
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child1" }),
  [
    React.createElement("h1", {}, "I'm h1 tag!"),
    React.createElement("h1", {}, "I'm h2 tag!"),
  ],
  React.createElement("div", { id: "child2" }),
  [
    React.createElement("h1", {}, "I'm h1 tag!"),
    React.createElement("h1", {}, "I'm h2 tag!"),
  ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//ReactElement(Object)=>HTML(Browser Understands)
// const heading = React.createElement("h1", { id: "red" }, "Hello World from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// console.log(heading);
// console.log(root);
