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

const name = <h1>This is a heading</h1>;

const Container2 = () => (
    <div className = "Title">
        {name}
        <h2>Hello Shubham</h2>
        <h3>pre-final Year student from CSIT</h3>
        <p>Software Engineer</p>
    </div>)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
