import React from "react";
import PortfolioItem from "../components/portfolio/portfolioItem";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import {useParams} from "react-router-dom";


const project = () => {
    return(
        <html>
        <head>
            <meta charSet="utf-8"/>
            <title>portfolio item</title>
        </head>
        <body>
        <div className={"ScContainer"}>
            <Navbar/>
            <PortfolioItem/>
        </div>
        <Footer></Footer>
        </body>
        </html>
    )
}

export default project;