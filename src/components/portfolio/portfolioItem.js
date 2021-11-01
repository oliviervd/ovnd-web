import React from "react";
import { Box } from "rebass"
import {useParams} from "react-router-dom";
import projectData from "../data/projects.json";


const PortfolioItem = () => {
    const { id } = useParams();

    return(
        <div className="wrap">
            <Box>
                <h1> test </h1>
            </Box>
        </div>
    )
}

export default PortfolioItem;