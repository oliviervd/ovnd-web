import React from 'react'

const Navbar = () => {
    return(
        <div className="wrap">
            <nav>
                <container>
                    <div className="nav_menu">
                        <ul>
                            <li><a href="/" target="_self">home</a></li>
                            <li><a href="/projects" target="_self">c_coding</a></li>
                            <li><a href="/music" target="_self">music</a></li>
                            <li><a href="/about" target="_self">about</a></li>
                            <li><a href="/contact" target="_self">contact</a></li>
                        </ul>
                    </div>
                </container>
            </nav>
        </div>
    )
}

export default Navbar