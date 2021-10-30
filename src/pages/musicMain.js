import React from "react";

const MusicMain = () => {
    return (
        <html>
        <head>
            <title>music main</title>
        </head>
        <body>
            <div className="wrap">
                <nav>
                    <container>
                        <div className="nav_menu">
                            <ul>
                                <li><a href="/" target="_self">home</a></li>
                                <li><a href="/projects" target="_self">c_coding</a></li>
                                <li><a href="/musicMain" target="_self">music</a></li>
                                <li><a href="/about" target="_self">about</a></li>
                                <li><a href="/contact" target="_self">contact</a></li>
                            </ul>
                        </div>
                    </container>
                </nav>
            </div>
            <div className="grid">
                <div className="portfolio_ele"></div>
            </div>
        </body>
        </html>
    )
}

export default MusicMain