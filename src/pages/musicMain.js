import React from "react";
import Navbar from "../components/navbar/navbar";
import Portfolio from "../components/portfolio/portfolio";

const MusicMain = () => {
    return (
        <html>
        <head>
            <meta charSet="utf-8"/>
            <title>OVND - music portfolio</title>
        </head>
        <body>
        <div className={"ScContainer"}>
            <Navbar/>
            <Portfolio/>
        </div>
        </body>
        </html>
    )
}

export default MusicMain
