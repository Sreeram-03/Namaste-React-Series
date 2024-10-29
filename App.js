import React from "react";
import ReactDOM from "react-dom/client";
//1. Create a Nested Header Element using React.createElement
//Using React.createElement, you can create elements without JSX.
//Here’s how to create h1, h2, and h3 nested inside a div with a class of title:
const one = React.createElement(
  "div",
  { id: "title" },
  React.createElement("h1", {}, "I'm an h1 Tag"),
  React.createElement("h2", {}, "I'm an h2 tag"),
  React.createElement("h3", {}, "I'm an h3 tag")
);
//2. Create the Same Element using JSX
const onejsx = (
  <div>
    <h1>I'm an h1 tag</h1>
    <h2>I'm an h2 tag</h2>
    <h3>I'm an h3 tag</h3>
  </div>
);
//3. Functional component jsx
const TitleComponent = () => (
  <div className="title">
    <h1>This is H1</h1>
    <h2>This is H2</h2>
    <h3>This is H3</h3>
  </div>
);
//4.Pass Attributes into the Tag in JSX
const TitleComponentWithAttributes = () => (
    <div className="title" id="header-title" style={{ color: "blue" }}>
      <h1>This is H1 with id and style</h1>
      <h2>This is H2</h2>
      <h3>This is H3</h3>
    </div>
  );
//5.Passing component to another component
const Header = () => (
    <div className="header">
      <h1>This is Header</h1>
    </div>
  );
  
  const Page = () => (
    <div className="page">
      <Header />
      <h2>This is a Page with a Header Component Inside</h2>
    </div>
  );
const root = ReactDOM.createRoot(document.getElementById("root")); // It's the job of ReactDOM to create root i.e, heading in this case, bcz root is a dom element which is rendered to be on browser. This root is the place where all React code will run.

// root.render(heading);
//root.render(one);
//root.render(onejsx);
//root.render(<TitleComponent />);
//root.render(<TitleComponentWithAttributes/>)
root.render(<Page/>)

// In React, Render is the technique that can redirect a page with the help of function render(). Most importantly, render a function we can use to define the HTML code within the HTML element. It helps to display certain views in the UI using certain logic defined in the render function and returns the output.
