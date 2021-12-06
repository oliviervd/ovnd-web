import React from "react";
import ReactPlayer from 'react-player'
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

const ProjectSum = () => {
    return (
        <html>
        <head>
            <meta charset="utf-8"/>
            <title>creative coding projects</title>
        </head>
        <body>
        <div className={"ScContainer"}>
            <Navbar/>
            <h1 className={"centerHeader"}>A CREATIVE CODING PORTFOLIO</h1>
            <p className={"centerText"}>This page will serve as a future landing page for creative coding endeavours</p>
            <div className="flexMain">
                <div className={"homeColSide"}>
                    <p>X</p>
                </div>
                <div>
                    <ReactPlayer className="cinema" url='https://www.dropbox.com/s/8avv08dvlw7sd8n/0001-0686.mp4?dl=0' playing={true} loop={true} width="900px" height="630px" />
                </div>
                <div className={"homeColSide"}>
                    <p>X</p>
                </div>
                <br/>
            </div>
        </div>
        <Footer/>
        </body>
        </html>
    )
}

export default ProjectSum;