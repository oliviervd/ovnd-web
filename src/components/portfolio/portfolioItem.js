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

    return(

        <div>
            <div className="portfolioBox">
                <div id="scroll-container">
                    <div className="title_scroller">
                        <h1 className="scroll_text uppercase">{x.map(x => <div>{x.title}</div>)}</h1>
                        <h1 className="scroll_text uppercase">{x.map(x => <div>{x.title}</div>)}</h1>
                        <h1 className="scroll_text uppercase">{x.map(x => <div>{x.title}</div>)}</h1>
                        <h1 className="scroll_text uppercase">{x.map(x => <div>{x.title}</div>)}</h1>
                        <h1 className="scroll_text uppercase">{x.map(x => <div>{x.title}</div>)}</h1>
                        <h1 className="scroll_text uppercase">{x.map(x => <div>{x.title}</div>)}</h1>
                        <h1 className="scroll_text uppercase">{x.map(x => <div>{x.title}</div>)}</h1>
                        <h1 className="scroll_text uppercase">{x.map(x => <div>{x.title}</div>)}</h1>
                    </div>
                </div>
                <div className="portfolioItem">
                    <div className="portfolioInfo">
                        <div className={"portfolioLine"}>
                            <p>{x.map(x => <div>{x.year}</div>)}</p>
                        </div>
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

                        <hr/>
                        <br/>
                        {/* media source  */}
                        {x.map((o) => {
                            if (typeof o.source != 'undefined') {
                                if (typeof o.source.bandcamp != 'undefined') {
                                    return <iframe className={"media_bandcamp"} src={o.source.bandcamp} seamless/>
                                } else {
                                    if (typeof o.source.soundcloud != 'undefined') {
                                        return <iframe width="100%" height="300" scrolling="no" frameBorder="no"
                                                       allow="autoplay"
                                                       src={o.source.soundcloud}/>
                                    }
                                }
                            }})}

                    </div>
                    <div className="portfolioImage">
                        {/* image  */}
                        {x.map((o) => {
                            if (typeof o.img != 'undefined') {
                                const _path = "/media/img/" + x.map(x => o.img.src)
                                return <img src= {_path} className="filmStill" />
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioItem;
