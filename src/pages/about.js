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
                        <h1>ABOUT ME</h1>
                        <p> “My music is often inward looking.. I tend to try and put certain feelings, images or ideas into perspective which eventually resonates in the instruments used for a certain track.”</p>
                        <p>
                            Olivier (BE) is a musician and digital creative based in Ghent, Belgium. He cultivated his love for music,
                            design and film while studying art history and occasionally assisting on film set as a set dresser. His passion for music
                            matured while playing in, and producing for several bands. During the day he works at the design museum on digital culture.
                            Composing for both film and advertisement, Olivier has established himself as a freelance composer.
                        </p>
                        <h1>GET IN TOUCH</h1>
                        <div>
                            <p>For further information on the projects or media requests,<br/>inquiries for collaboration or just
                                saying hello, <br/>please send me an email to<a href={"mailto: ovnd.music@gmail.com"}>ovnd.music@gmail.com</a></p>
                        </div>
                    </Box>
                    <Box flex={2}>
                        <img className="aboutPicture" src="/media/img/bio_pic.jpg" alt={"Olivier Van D'huynslager"}></img>
                    </Box>
                </div>
                <Footer/>
            </Desktop>

            <Mobile>
                <Navbar/>
                <div className={"aboutMob"}>

                    <h1>CONTACT ME</h1>
                    <div>
                        <p>For further information on the projects or media requests,<br/>inquiries for collaboration or just
                            saying hello, <br/>please send me an email to<a href={"mailto: ovnd.music@gmail.com"}>ovnd.music@gmail.com</a></p>
                    </div>
                </div>
            </Mobile>

        </container>
        </body>
        </html>
    )
}

export default about