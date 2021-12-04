import React from "react";
import Navbar from "../components/navbar/navbar";

const MainPage = () => {
    return (
        <html>
        <head>
            <meta httpEquiv="Content-Type" content="text/html" charset="utf-8"/>
            <title>home</title>
            <script type="text/javascript" src="processing.js"></script>
        </head>
        <body>
        <div className={"ScContainer"}>
            <Navbar/>
            <div className="App">
                <div>
                    <canvas className= {"processingSketch"} id="sketch" data-processing-sources="sketches/home.pde"></canvas>
                    <br></br>
                </div>
            </div>
        </div>
        </body>
        </html>
    );
}

export default MainPage;