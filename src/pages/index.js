import React from "react";
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <div className="App">
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <title>My Processing Page</title>
                <script type="text/javascript" src="../public/processing.js"></script>
            </head>
            <body>
            <div>
                <h1>OVND</h1>
                <p>An online archive to house creative coding endeavours</p>
            </div>
            <div>
                <canvas id="sketch" data-processing-sources="sketches/home.pde"></canvas>
            </div>
            <div>
                <br></br>
                <a className="links" href="/projects">INDEX</a>
            </div>
            </body>
        </div>
    );
}

export default MainPage;