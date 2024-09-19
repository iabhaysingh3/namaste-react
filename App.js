/*
*
* HRM - Hot Module Replacement
* File Watcher algorithm - C++
* BUNDLING
* MINIFY
* Cleaning our Code
* Dev and Production Build
* Super Fast build algorithm
* Image Optimization
* Caching while development
* Compression
* Compatable with older version of browsers
* HTTPS on dev
* Port Number
* Consistent Hashing algorithm
* Zero Config
* Tree Shaking - Removing un-wanted code
* 
* Transitive Dependencies
* 
*/

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {
    id:"title"
}, "Heading 1 from parcel");

const heading2 = React.createElement("h2", {
    id:"title"
}, "Heading 2");

const container = React.createElement("div", {
    id: "container",
    hello:"world"
}, [heading, heading2]);

console.log(heading);



const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element indside the root
root.render(container);