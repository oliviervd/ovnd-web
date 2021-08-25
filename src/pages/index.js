import React from "react";

const navLinks = document.querySelectorAll("nav a")
const navTextCopy = document.getElementById("nav_big_text")

for (let i=0; i<navLinks.length; i++){
    navLinks[i].addEventListener("mouseover",function(){
        let navLinkText = this.textContent
        navTextCopy.textContent = navLinkText
        navTextCopy.classList.add("big_text_active")
    })

    navLinks[i].addEventListener("mouseout",function(){
        let navLinkText = this.textContent
        navTextCopy.textContent = navLinkText;
        navTextCopy.classList.remove("big_text_active")
    })
}

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
                                    <li><a className="links" href="/projects" target="_blank">c_coding</a></li>
                                    <li><a className="links" href="/musicMain" target="_blank">music</a></li>
                                    {/*<li><a className="links" href="/about" target="_blank">about</a></li>*/}
                                    {/*<li><a className="links" href="/contact" target="_blank">contact</a></li>*/}
                                </ul>
                            </div>
                        </container>
                    </nav>
                </div>
                <div className="App">
                    <div>
                        <canvas id="sketch" data-processing-sources="sketches/home.pde"></canvas>
                        <br></br>
                        <a href="/">REFRESH ME</a>
                    </div>
                </div>
                <div className="hero">
                    <div id="nav_big_text"></div>
                </div>
            </body>
        </html>
    );
}

export default MainPage;