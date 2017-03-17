// src/app.js

if (module.hot) {
    module.hot.accept()
}

import React from "react";
import ReactDOM from 'react-dom';
import Header from "./header";
import './style.scss'

ReactDOM.render(
    <Header />,
    document.getElementById("root")
);

