import React, { useState } from 'react';
import { MdClose } from "react-icons/md";
import { VscMenu } from "react-icons/vsc";


const Navbar = () => {

    //hamburger menu
    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }
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
                    <nav className="navBurger">
                        <button onClick={handleToggle}>{navbarOpen ? (
                            <MdClose style={{color: "#FFCDD2", width: "40px", height: "40px"}}/>
                            ) : (
                            <VscMenu style={{color: "#FFCDD2", width: "40px", height: "40px"}}/>
                        )}
                        </button>
                        <li className={`menuNavBurger${navbarOpen ? " showMenu": ""}`}><a href="/" target="_self">home</a></li>
                        <li className={`menuNavBurger${navbarOpen ? " showMenu": ""}`}><a href="/projects" target="_self">c_coding</a></li>
                        <li className={`menuNavBurger${navbarOpen ? " showMenu": ""}`}><a href="/music" target="_self">music</a></li>
                        <li className={`menuNavBurger${navbarOpen ? " showMenu": ""}`}><a href="/about" target="_self">about</a></li>
                        <li className={`menuNavBurger${navbarOpen ? " showMenu": ""}`}><a href="/contact" target="_self">contact</a></li>
                    </nav>
                </container>
            </nav>
        </div>
    )
}

export default Navbar