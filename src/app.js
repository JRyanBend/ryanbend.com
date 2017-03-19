// src/app.js

if (module.hot) {
    module.hot.accept()
}

import React from "react";
import ReactDOM from 'react-dom';
import Main from "./common/main";
import './style.scss'

ReactDOM.render(
    <Main />,
    document.getElementById("root")
);

