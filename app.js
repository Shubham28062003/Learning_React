// const heading = React.createElement("h1",{},"Hello React !!");
//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(heading);


const heading = React.createElement("h1", {
    id : "heading"
},
"Hello React This is heading 1")

const container = React.createElement("div",{
    id : "container",
    className : "class-container"
},["This is Div",heading])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
