import React from "react";
import Navbar from "../components/navbar/navbar";
import Portfolio from "../components/portfolio/portfolio";
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

const MusicMain = () => {
    return (
        <html>
        <head>
            <meta charSet="utf-8"/>
            <title>OVND - music portfolio</title>
        </head>
        <body>
        <div>
            <Desktop>
                <Navbar/>
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"svg-filter"}>
                    <defs>
                        <filter id={"noise"}>
                            <feOffset in={"SourceGraphic"}
                                      dx={"-8"}
                                      dy={"-8"}/>
                            <feGaussianBlur in={"offset"}
                                            stdDeviation={"64"}
                                            result={"blur"}/>
                            <feTurbulence result={"waves"}
                                          type={"turbulence"}
                                          baseFrequency={"0.735 0.771"}
                                          numOctaves={"1"} seed={"256"}>
                            </feTurbulence>
                            <feDisplacementMap in={"blur"}
                                               in2={"waves"}
                                               scale={"320"}
                                               xChannelSelector={"R"}
                                               yChannelSelector={"B"}
                                               result={"ripples"}>
                            </feDisplacementMap>
                            <feComposite in="waves"
                                         in2="ripples"
                                         operator="arithmetic"
                                         k1="1" k2="0" k3="1" k4="0">
                            </feComposite>
                        </filter>
                    </defs>
                </svg>
                <div>
                    <Portfolio/>
                </div>
            </Desktop>
            <Mobile>
                <Navbar/>
                <div className="portfolioBox">
                    <Portfolio/>
                </div>
            </Mobile>
        </div>
        <br/>
        </body>
        </html>
    )
}

export default MusicMain
