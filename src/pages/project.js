import React from "react";
import PortfolioItem from "../components/portfolio/portfolioItem";
import Navbar from "../components/navbar/navbar";
import {useParams} from "react-router-dom";


const project = () => {
    return(
        <html>
        <head>
            <meta charSet="utf-8"/>
            <title>portfolio item</title>
        </head>
        <body>
        <Navbar/>
        <h1> UNDER CONSTRUCTION </h1>
        <PortfolioItem/>
        </body>
        </html>
    )
}

export default project;