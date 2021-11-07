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
    const _path = "/media/img/" + x.map(x => x.img.src)

    return(

        <div className="wrap">
            <Box className="projectPage">
                <Box flex={2} className="infoBox">
                    <h1>{x.map(x => <div>{x.title}</div>)}</h1>
                    <p>{x.map(x => <div>{x.year}</div>)}</p>
                    <p>{x.map(x => <div>{x.description}</div>)}</p>

                    {/* director */}
                    {x.map((o) => {
                        if (typeof o.production != 'undefined') {
                        return <p><strong>director: </strong>{x.map(x => <div>{o.production.director}</div>)}</p>
                    }})}

                    {/* writer */}
                    {x.map((o) => {
                        if (typeof o.production != 'undefined') {
                            return <p><strong>written by: </strong>{x.map(x => <div>{o.production.writer}</div>)}</p>
                        }})}

                    {/* cinematographer */}
                    {x.map((o) => {
                        if (typeof o.production != 'undefined') {
                            return <p><strong>cinematography: </strong>{x.map(x => <div>{o.production.cinematography}</div>)}</p>
                        }})}

                </Box>
                <Box flex={4}>
                    <img
                        src= {_path} className="filmStill"
                        alt= {x.map(x => <div>{x.img.alt}</div>)}
                    />
                </Box>
            </Box>
        </div>
    )
}

export default PortfolioItem;