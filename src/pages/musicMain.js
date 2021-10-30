import React from "react";
import Navbar from "../components/navbar/navbar";
import Portfolio from "../components/portfolio/portfolio";
import { vimeoBox } from "../components/portfolio/elements"
import { Box } from "rebass";

const MusicMain = () => {
    return (
        <html>
        <head>
            <title>music main</title>
        </head>
        <body>
        <Navbar/>
        <Portfolio/>
        <div className="wrap">
            <Box className="vimeoBox">
                <Box flex={2}>
                    <iframe
                        width='640px'
                        height='480px'
                        src="https://player.vimeo.com/video/393541385?h=c28bfde478"
                        frameBorder='0'
                        allow = "autoplay; fullscreen; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </Box>
                <Box flex={2}>
                    <h3>un, deux, trois, soleil</h3>
                    <h5>2020 - advertisment</h5>
                    <p>
                        Campaign for Youth at Social Risk written and directed by <a href="https://vimeo.com/user31400593">Khaël Touag</a>
                        Shot by Virgil Leclercq, produced by Les Mecs.
                    </p>
                </Box>
            </Box>
            <Box className="vimeoBox">
                <Box flex={2}>
                    <iframe
                        width='640px'
                        height='480px'
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1174186456&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                        frameBorder='0'
                        allow = "autoplay; fullscreen; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </Box>
                <Box flex={2}>
                    <h3>Nest</h3>
                    <h5>2020 - short movie</h5>
                    <p>
                        Met: Pepijn Vandelanotte, Karen Vanparys en Tom Vermeir
                        Regie en montage: Matthee Van Holderbeke
                        Cinematografie: Angela Otten
                        Sound design: Noemi Osselaer
                        Geluidsmix: Michel Coquette
                        Muziek: Olivier Van D’huynslager en Arthur Pauwels
                        Productie: Sven Sp
                    </p>
                </Box>
            </Box>
        </div>
        </body>
        </html>
    )
}

export default MusicMain
