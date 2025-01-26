
import React from 'react';
import ReactDOM from 'react-dom/client';

let headingEl = React.createElement("h1", {}, "react hello");
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingEl) 

