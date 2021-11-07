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
            <div className="App">
                <ReactPlayer className="cinema" url='https://www.dropbox.com/s/8avv08dvlw7sd8n/0001-0686.mp4?dl=0' playing={true} loop={true} width="900px" height="630px" />
                <br/>
            </div>
        </div>
        <Footer></Footer>
        </body>
        </html>
    )
}

export default ProjectSum;