import React from "react"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import { Box } from "rebass"
import {useMediaQuery} from "react-responsive";

const about = () => {

    const Desktop = ({children}) => {
        const isDesktop = useMediaQuery({minWidth: 786})
        return isDesktop? children:null
    };

    const Mobile = ({children}) => {
        const isMobile = useMediaQuery({maxWidth: 786})
        return isMobile? children:null
    };

    return (
        <html>
        <head>
            <meta charSet="utf-8"/>
            <title>about me</title>
        </head>
        <body>

        <container>
            <Desktop>
                <Navbar/>
                <div className={"box"}>
                    <Box flex={2}>
                        <p className="Bio italic"> “My music is often inward looking.. I tend to try and put certain feelings, images or ideas into perspective which eventually resonates in the instruments used for a certain track.”</p>
                        <br/>
                        <p className="Bio">
                            Olivier (BE) is a musician and digital creative based in Ghent, Belgium. He cultivated his love for music,
                            design and film while studying art history and occasionally assisting on film set as a set dresser. His passion for music
                            matured while playing in, and producing for several bands. During the day he works at the design museum on digital culture.
                            Composing for both film and advertisement, Olivier has established himself as a freelance composer.
                        </p>
                    </Box>
                    <Box flex={2}>
                        <img className="aboutPicture" src="/media/img/bio_pic.jpeg" alt={"Olivier Van D'huynslager"}></img>
                    </Box>
                </div>
                <Footer/>
            </Desktop>

            <Mobile>
                <Navbar/>
                <div className={"aboutMob"}>
                    <div>
                        <p className="Bio italic"> “My music is often inward looking.. I tend to try and put certain feelings, images or ideas into perspective which eventually resonates in the instruments used for a certain track.”</p>
                        <br/>
                        <p className="Bio">
                            Olivier (BE) is a musician and digital creative based in Ghent, Belgium. He cultivated his love for music,
                            design and film while studying art history and occasionally assisting on film set as a set dresser. His passion for music
                            matured while playing in, and producing for several bands. During the day he works at the design museum on digital culture.
                            Composing for both film and advertisement, Olivier has established himself as a freelance composer.
                        </p>
                    </div>
                    <div className={"box"}>
                        <img className={"image"} src="/media/img/bio_pic.jpeg" alt={"Olivier Van D'huynslager"}></img>
                    </div>
                </div>
            </Mobile>

        </container>
        </body>
        </html>
    )
}

export default about