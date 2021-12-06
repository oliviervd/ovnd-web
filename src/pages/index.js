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
            <div className="flexMain">
                <div className={"homeColSide"}>
                    <a href={"/music"} target={"_self"}><h1 className={"homeLinkOVND"}>MUSIC PRODUCTION</h1></a>

                </div>
                <div>
                    <h1 className={"centerHeader"}>OVND</h1>
                    <canvas id="sketch" data-processing-sources="sketches/home.pde"></canvas>
                </div>
                <div className={"homeColSide"}>
                    <a href={"/projects"} target={"_self"}><h1 className={"homeLinkOVND"}>CREATIVE CODING</h1></a>
                </div>
            </div>
        </div>
        </body>
        </html>
    );
}

export default MainPage;