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
                <div className="wrap">
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
