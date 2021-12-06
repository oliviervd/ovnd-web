import React from "react";
import {useParams} from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import projectData from "../data/projectsMusic.json";

function getval(id) {
    let obj = projectData.filter(item => item.id === id);
    return obj;
}


const PortfolioItem = () => {
    //database
    const { id } = useParams();
    const x = getval(id)

    //responsive design
    const Desktop = ({children}) => {
        const isDesktop = useMediaQuery({minWidth: 986})
        return isDesktop ? children:null
    }

    const Mobile = ({children}) => {
        const isMobile = useMediaQuery({maxWidth : 986})
        return isMobile? children:null
    }

    return(
        <container>
            <Desktop>
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
                                <div>
                                    <h1 className={"portfolioHeader"}>{x.map(x => <div>{x.title}</div>)}</h1>
                                </div>
                                <p>{x.map(x => <div>{x.description}</div>)}</p>

                                {/* director */}
                                {/* eslint-disable-next-line array-callback-return */}
                                {x.map((o) => {
                                    if (typeof o.production != 'undefined') {
                                        return <p><strong>director: </strong>{x.map(x => <div>{o.production.director}</div>)}</p>
                                    }})}

                                {/* writer */}
                                {/* eslint-disable-next-line array-callback-return */}
                                {x.map((o) => {
                                    if (typeof o.production != 'undefined') {
                                        return <p><strong>written by: </strong>{x.map(x => <div>{o.production.writer}</div>)}</p>
                                    }})}

                                {/* cinematographer */}
                                {/* eslint-disable-next-line array-callback-return */}
                                {x.map((o) => {
                                    if (typeof o.production != 'undefined') {
                                        return <p><strong>cinematography: </strong>{x.map(x => <div>{o.production.cinematography}</div>)}</p>
                                    }})}

                                {/* festivals */}
                                {/* eslint-disable-next-line array-callback-return */}
                                {x.map((o) => {
                                    if (typeof o.festivals != 'undefined') {
                                        return <p><strong>festivals and awards: </strong>{x.map(x => <div>{o.festivals[0].festival}</div>)}</p>
                                    }
                                })}

                                <hr/>
                                <br/>
                                {/* media source  */}
                                {/* eslint-disable-next-line array-callback-return */}
                                {x.map((o) => {
                                    if (typeof o.source != 'undefined') {
                                        if (typeof o.source.bandcamp != 'undefined') {
                                            return <iframe className={"media_bandcamp"} src={o.source.bandcamp}
                                                           seamless
                                                           title={"Bandcamp iFrame"}/>
                                        } else if (typeof o.source.soundcloud != 'undefined') {
                                            return <iframe width="100%" height="300"
                                                           scrolling="no"
                                                           frameBorder="no"
                                                           allow="autoplay"
                                                           title={"Soundcloud iFrame"}
                                                           src={o.source.soundcloud}/>
                                        } else if (typeof o.source.youtube != 'undefined') {
                                            return <iframe width="560" height="315"
                                                           src={o.source.youtube}
                                                           title="YouTube video player" frameBorder="0"
                                                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                           allowFullScreen/>
                                        } else {
                                            if (typeof o.source.vimeo != 'undefined') {
                                                return <iframe
                                                    src={o.source.vimeo}
                                                    width="640" height="480" frameBorder="0"
                                                    allow="autoplay; fullscreen; picture-in-picture" allowFullScreen/>
                                            }
                                        }
                                    }
                                })}

                            </div>
                            <div className="portfolioImage">
                                {/* image  */}
                                {/* eslint-disable-next-line array-callback-return */}
                                {x.map((o) => {
                                    if (typeof o.img != 'undefined') {
                                        const _path = "/media/img/" + x.map(x => o.img.src)
                                        return <img src= {_path} className="filmStill" title={"filmstill"} alt={"filmstill of the movie"}/>
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </Desktop>
            <Mobile>
                <div>
                    <div className="portfolioBox">
                        <div className={"gradLine"}></div>
                        {/*<div className="portfolioImage">*/}
                        {/*    /!* image  *!/*/}
                        {/*    /!* eslint-disable-next-line array-callback-return *!/*/}
                        {/*    {x.map((o) => {*/}
                        {/*        if (typeof o.img != 'undefined') {*/}
                        {/*            const _path = "/media/img/" + x.map(x => o.img.src)*/}
                        {/*            return <img src= {_path} className="filmStill" title={"filmstill"} alt={"filmstill of the movie"}/>*/}
                        {/*        }*/}
                        {/*    })}*/}
                        {/*</div>*/}
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
                                <h1 className="scroll_text uppercase">{x.map(x => <div>{x.title}</div>)}</h1>
                                <h1 className="scroll_text uppercase">{x.map(x => <div>{x.title}</div>)}</h1>
                            </div>
                        </div>
                        <div className={"gradLine"}></div>
                        <div className="portfolioItem">
                            <div className="portfolioInfo">
                                <div>
                                    <h1 className={"portfolioHeader"}>{x.map(x => <div>{x.title}</div>)}</h1>
                                </div>
                                <div>
                                    <p>{x.map(x => <div>{x.year}</div>)}</p>
                                </div>
                                <p>{x.map(x => <div>{x.description}</div>)}</p>

                                {/* director */}
                                {/* eslint-disable-next-line array-callback-return */}
                                {x.map((o) => {
                                    if (typeof o.production != 'undefined') {
                                        return <p><strong>director: </strong>{x.map(x => <div>{o.production.director}</div>)}</p>
                                    }})}

                                {/* writer */}
                                {/* eslint-disable-next-line array-callback-return */}
                                {x.map((o) => {
                                    if (typeof o.production != 'undefined') {
                                        return <p><strong>written by: </strong>{x.map(x => <div>{o.production.writer}</div>)}</p>
                                    }})}

                                {/* cinematographer */}
                                {/* eslint-disable-next-line array-callback-return */}
                                {x.map((o) => {
                                    if (typeof o.production != 'undefined') {
                                        return <p><strong>cinematography: </strong>{x.map(x => <div>{o.production.cinematography}</div>)}</p>
                                    }})}

                                {/* festivals */}
                                {/* eslint-disable-next-line array-callback-return */}
                                {x.map((o) => {
                                    if (typeof o.festivals != 'undefined') {
                                        return <p><strong>festivals and awards: </strong>{x.map(x => <div>{o.festivals[0].festival}</div>)}</p>
                                    }
                                })}
                                <hr/>
                                <br/>

                                {/* media source  */}
                                {/* eslint-disable-next-line array-callback-return */}
                                {x.map((o) => {
                                    if (typeof o.source != 'undefined') {
                                        if (typeof o.source.bandcamp != 'undefined') {
                                            return <iframe className={"media_bandcamp"} src={o.source.bandcamp}
                                                           seamless
                                                           title={"Bandcamp iFrame"}/>
                                        } else if (typeof o.source.soundcloud != 'undefined') {
                                            return <iframe width="100%" height="300"
                                                           scrolling="no"
                                                           frameBorder="no"
                                                           allow="autoplay"
                                                           title={"Soundcloud iFrame"}
                                                           src={o.source.soundcloud}/>
                                        } else if (typeof o.source.youtube != 'undefined') {
                                            return <iframe width="560" height="315"
                                                           src={o.source.youtube}
                                                           title="YouTube video player" frameBorder="0"
                                                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                           allowFullScreen/>
                                        } else {
                                            if (typeof o.source.vimeo != 'undefined') {
                                                return <iframe
                                                    src={o.source.vimeo}
                                                    width="640" height="480" frameBorder="0"
                                                    allow="autoplay; fullscreen; picture-in-picture" allowFullScreen/>
                                            }
                                        }
                                    }
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </Mobile>
        </container>

    )
}

export default PortfolioItem;
