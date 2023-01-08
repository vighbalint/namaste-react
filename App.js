import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1 id="title" key="h1">
        Heading 1
    </h1>
);

const HeaderComponent = () => {
    return (
        <div>
            <Title />
            <h1>Namaste header</h1>
            <h2>this is h2</h2>
        </div>
    )
        
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);