import React from "react";
import ReactPlayer from 'react-player'
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import {useMediaQuery} from "react-responsive";

//media-query
const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 786 })
    return isDesktop? children: null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 786 })
    return isMobile? children: null
}

const ProjectSum = () => {
    return (
        <html>
        <head>
            <meta charset="utf-8"/>
            <title>creative coding projects</title>
        </head>
        <body>
        <Desktop>
            <div className={"ScContainer"}>
                <Navbar/>
                <h1 className={"centerHeader"}>A CREATIVE CODING PORTFOLIO</h1>
                <p className={"centerText"}>This page will serve as a future landing page for creative coding endeavours</p>
                <div className="flexMain">
                    <div className={"homeColSide"}>
                        <h1>♅</h1>
                    </div>
                    <div>
                        <ReactPlayer className="cinema" url='https://www.dropbox.com/s/8avv08dvlw7sd8n/0001-0686.mp4?dl=0' playing={true} loop={true} width="900px" height="630px" />
                    </div>
                    <div className={"homeColSide"}>
                        <h1>♅</h1>
                    </div>
                    <br/>
                </div>
            </div>
        </Desktop>
        <Mobile>
            <Navbar/>
            <h1 className={"centerHeader"}>A CREATIVE CODING PORTFOLIO</h1>
            <p className={"centerText"}>This page will serve as a future landing page for creative coding endeavours</p>
            <div className={"homeColSide"}>
                <h1>♅</h1>
            </div>
            <div>
            </div>
            <div className={"homeColSide"}>
                <h1>♅</h1>
            </div>
        </Mobile>
        </body>
        </html>
    )
}

export default ProjectSum;