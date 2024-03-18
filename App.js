import React from "react";
import ReactDOM from "react-dom"


// const heading = React.createElement("div", { id: "parent" }, [
//    React.createElement("div", { id: "child" }, [
//      React.createElement("h1", {}, "I'm an h1 tag"),
//      React.createElement("h2", {}, "I'm an h2 tag"),
//    ]),
//    React.createElement("div", { id: "child2" }, [
//      React.createElement("h1", {}, "I'm an h1 tag"),
//      React.createElement("h2", {}, "I'm an h2 tag"),
//    ]),
//  ]);
 
 //JSX
 // if we have to write this jsx in one line then it is fine or not mandatory but if we need to write in multiple line
 // then we need to give parenthesis() for babel ==> js compiler to understand where JSX start where JSX ends

//  const jsxHeading = <h1 id="heading" className="head" tabIndex={1}> Namaste React using JSX 🚀🚀🚀</h1>
 
//React Element
const jsxHeading = (<h1 id="heading" className="head" tabIndex={1}>
 Namaste React using JSX 🚀🚀🚀</h1>)

const Title =()=>( <h1 id="title"> Namaste JavaScript using Functional Component🚀🚀</h1> );
const number = 10000;
//Component Composition => title component is composed in Heading Component
//we can inject any piece of js code in react component by using {} these brackets
const HeadingComponent =()=>( 
  <div id="container" >
    <Title /> 
    <h2>{number}</h2>
    {console.log("I love React")} 
    <h2 id="heading" > Component compositon</h2>
  </div>
);


 console.log(parent); // object
 
 const root = ReactDOM.createRoot(document.getElementById("root"));
 
//  root.render(heading);
// root.render(jsxHeading);
 root.render(<HeadingComponent/>);