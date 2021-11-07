import React from "react";
import Navbar from "../components/navbar/navbar";
import Portfolio from "../components/portfolio/portfolio";
import Footer from "../components/footer/footer"

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
        <Footer></Footer>
        </body>
        </html>
    )
}

export default MusicMain
