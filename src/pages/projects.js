import React from "react";
import ReactPlayer from 'react-player'
import Navbar from "../components/navbar/navbar";

const ProjectSum = () => {
    return (
        <html>
        <head>
            <title>creative coding repo</title>
        </head>
        <body>
        <Navbar/>
        <div className="App">
            <ReactPlayer className="cinema" url='https://www.dropbox.com/s/8avv08dvlw7sd8n/0001-0686.mp4?dl=0' playing={true} loop={true} width="900px" height="630px" />
            <br/>
        </div>
        </body>
        </html>
    )
}

export default ProjectSum;