import React from "react";
import { Box } from "rebass"
import {useParams} from "react-router-dom";

import projectData from "../data/projects.json";

function getval(id) {
    let obj = projectData.filter(item => item.id === id);
    return obj;
}


const PortfolioItem = () => {
    const { id } = useParams();
    const x = getval(id)
    const _path = "/media/img/" + x.map(x => x.img)

    return(

        <div className="wrap">
            <Box className="projectPage">
                <Box flex={2} class="infoBox">
                    <h1>{x.map(x => <div>{x.title}</div>)}</h1>
                    <p>{x.map(x => <div>{x.description}</div>)}</p>
                </Box>
                <Box flex={4}>
                    <img src= {_path}/>
                </Box>
            </Box>
        </div>
    )
}

export default PortfolioItem;