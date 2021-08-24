import React from "react";
import ReactPlayer from 'react-player'

const ProjectSum = () => {
    return (
        <div className="App">
            <h1>PROJECTS</h1>
            <p>
                A non-extensive list of projects exploring Creative Coding
            </p>
            <ReactPlayer className="center" url='https://www.dropbox.com/s/8avv08dvlw7sd8n/0001-0686.mp4?dl=0' playing="true" loop="true" width="900px" height="630px" />
            <a href="/"> HOME </a>
        </div>
    )
}

export default ProjectSum;