import React from "react";

const navLinks = document.querySelectorAll("nav a")
const navTextCopy = document.getElementById("nav_big_text")

const MainPage = () => {
    return (
        <html>
            <head>
                <meta httpEquiv="Content-Type" content="text/html" charset="utf-8" />
                <title>home</title>
                <script type="text/javascript" src="processing.js"></script>
            </head>
            <body>
                <div class="wrap">
                    <nav>
                        <container>
                            <div class="nav_menu">
                                <ul>
                                    <li><a href="/projects" target="_self">c_coding</a></li>
                                    <li><a href="/musicMain" target="_self">music</a></li>
                                    <li><a href="/about" target="_self">about</a></li>
                                    <li><a href="/contact" target="_blank">contact</a></li>
                                </ul>
                            </div>
                        </container>
                    </nav>
                </div>
                <div className="App">
                    <div>
                        <canvas id="sketch" data-processing-sources="sketches/home.pde"></canvas>
                        <br></br>
                    </div>
                </div>
                <div className="hero">
                    <div id="nav_big_text"></div>
                </div>
            </body>
        </html>
    );
}

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

export default MainPage;