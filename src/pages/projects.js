import React from "react";
import ReactPlayer from 'react-player'

const ProjectSum = () => {
    return (
        <html>
            <head>
                <title>creative coding repo</title>
            </head>
            <body>
                <div class="wrap">
                    <nav>
                        <container>
                            <div class="nav_menu">
                                <ul>
                                    <li><a className="links" href="/projects">c_coding</a></li>
                                    {/*<li><a className="links" href="/music">music</a></li>*/}
                                    {/*<li><a className="links" href="/about">about</a></li>*/}
                                    {/*<li><a className="links" href="/contact">contact</a></li>*/}
                                </ul>
                            </div>
                        </container>
                    </nav>
                </div>
                <div className="App">
                    <ReactPlayer className="cinema" url='https://www.dropbox.com/s/8avv08dvlw7sd8n/0001-0686.mp4?dl=0' playing={true} loop={true} width="900px" height="630px" />
                    <p> A non-extensive list of projects exploring Creative Coding </p>
                    <br/>
                </div>
            </body>
        </html>
    )
}

export default ProjectSum;