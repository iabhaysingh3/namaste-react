// const heading = document.createElement("h1");

//         heading.innerHTML = "Namaste Everyone form JavaScript!";

//         const root = document.getElementById("root");

//         root.appendChild(heading);



// write these code using ReactJs
const heading1 = React.createElement("h1", {
    id : "heading1"
},
"Heading 1"
);

const heading2 = React.createElement("h2", {
    id : "heading2"
}, 
"Heading 2"
);

const container = React.createElement("div", {
    id : "container"
}, 
[heading1, heading2]
)

// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a React element inside the root
root.render(container);