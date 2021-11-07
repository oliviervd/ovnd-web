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

                    <Box flex={3} className={"portfolioLine"}>
                        <h1 class="uppercase">{x.map(x => <div>{x.title}</div>)}</h1>
                    </Box>
                    <Box flex={1} className={"portfolioLine"}>
                        <p>{x.map(x => <div>{x.year}</div>)}</p>
                    </Box>
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

                    {/* media source  */}
                    {x.map((o) => {
                        if (typeof o.source != 'undefined') {
                            if (typeof o.source.bandcamp != 'undefined') {
                                return <iframe className={"media_bandcamp"} src={o.source.bandcamp} seamless/>
                            } else {
                                if (typeof o.source.soundcloud != 'undefined') {
                                    return <iframe width="100%" height="450" scrolling="no" frameBorder="no"
                                                   allow="autoplay"
                                                   src={o.source.soundcloud}/>
                                }
                            }
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
