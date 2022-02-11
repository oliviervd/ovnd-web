import React from "react";
import {useMediaQuery} from "react-responsive";

    //responsive design
    const Desktop = ({children}) => {
        const isDesktop = useMediaQuery({minWidth: 986})
        return isDesktop ? children:null
    }

    const Mobile = ({children}) => {
        const isMobile = useMediaQuery({maxWidth : 986})
        return isMobile? children:null
    }

const MainPage = () => {
    return (
        <html>
        <head>
            <meta httpEquiv="Content-Type" content="text/html" charset="utf-8"/>
            <title>home</title>
            <script type="text/javascript" src="processing.js"></script>
        </head>
        <body>
        <container>
            <Desktop>
                <div>
                    <div className="flexMain">
                        <div className={"homeColSide"}>
                            <a href={"/music"} target={"_self"}><h1 className={"hoverLinkEffect"}>MUSIC PRODUCTION</h1></a>
                        </div>
                        <div>
                            <a href={"/"} target={"_self"}>
                            <h1 className={"centerHeader big hoverLinkEffect"}>
                                <span>OVND</span>
                            </h1>
                                <p>
                                    OLIVIER VAN D'HUYNSLAGER IS A MUSICIAN AND DIGITAL CREATIVE BASED IN GHENT
                                </p>
                            </a>
                            <canvas id="sketch" data-processing-sources="sketches/home.pde" className={"center"}></canvas>
                        </div>
                        <div className={"homeColSide"}>
                            <a href={"/projects"} target={"_self"}><h1 className={"hoverLinkEffect"}>CREATIVE CODING</h1></a>
                        </div>
                    </div>
                </div>
            </Desktop>
            <Mobile>
                <div className={"ScContainer"}>
                    <h1 className={"centerHeader"}>OVND</h1>
                    <div className={"portfolioLine"}></div>
                    <br/>
                    <div>
                        <h1 className={"centerHeader"}>♅</h1>
                        <br/>
                        <a className={"centerText"} href={"/music"} target={"_self"}><h1 className={"homeLinkOVND"}>MUSIC PRODUCTION</h1></a>
                        <h1 className={"centerHeader"}>♅</h1>
                        <a className={"centerText"} href={"/projects"} target={"_self"}><h1 className={"homeLinkOVND"}>CREATIVE CODING</h1></a>
                    </div>
                    <div>
                        {/*<canvas id="sketch" data-processing-sources="sketches/home.pde"></canvas>*/}
                    </div>
                </div>
            </Mobile>
        </container>
        </body>
        </html>
    );
}

export default MainPage;