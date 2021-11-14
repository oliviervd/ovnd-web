import React from "react";
import PortfolioItem from "../components/portfolio/portfolioItem";
import Navbar from "../components/navbar/navbar";


const project = () => {
    return(
        <html>
        <head>
            <meta charSet="utf-8"/>
            <title>portfolio item</title>
        </head>
        <body>
        <div className="app">
            <Navbar/>
            <PortfolioItem/>
        </div>
        </body>
        </html>
    )
}

export default project;