import React from "react"
import Navbar from "../components/navbar/navbar"
import { Box } from "rebass"

const about = () => {
    return (
        <html>
        <head>
            about
        </head>
        <body>
        <Navbar/>
        <div className="vimeoBox">>
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
            <Box flex={1}>
                <img className="bioPicture" src="/media/img/bio_pic.jpeg"></img>
            </Box>
        </div>
        </body>
        </html>
    )
}

export default about