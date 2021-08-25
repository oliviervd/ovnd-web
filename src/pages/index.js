import React from "react";

const MainPage = () => {
    return (
        <html>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <title>home</title>
                <script type="text/javascript" src="../public/processing.js"></script>
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
                    <div>
                        <canvas id="sketch" data-processing-sources="sketches/home.pde"></canvas>
                        <p>REFRESH ME</p>
                        <p>An online archive to house creative coding endeavours</p>
                    </div>
                </div>
            </body>
        </html>
    );
}

export default MainPage;