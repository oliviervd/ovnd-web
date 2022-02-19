import React from "react";
import projectData from "../data/projectsMusic.json";
import { Box } from "rebass"
import { useMediaQuery } from "react-responsive";

//filters
/*
function filterByName (value) {
    if (handleCheck !== undefined) {
        let filterKeys = ['narrative content', 'documentary'];

        return filterKeys.every(function (key) {
                return !handleCheck[key] || value[key];
            }
        );
    } else {
        return value;
    }
}
*/

const Portfolio = () => {

    //database

    //media-query
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 786 })
        return isDesktop? children: null
    }
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 786 })
        return isMobile? children: null
    }

    return (
        <div className={"parent"}>
            <div className={"left"}>
                {projectData.map((postDetail, index)=>{

                    //fetch img from db and construct path.
                    const _href = "/music/"+ postDetail.id;
                    const _path = "/media/thumb/" + postDetail.img.src;

                    // filter based on type


                    return (
                        <container>
                            <Desktop>
                                <div className={"wrap"}>
                                    <div id="LineEL" className="portfolioLine">
                                        <Box flex={0.5}>
                                            <h5 className="subText">{postDetail.year}</h5>
                                        </Box>
                                        <Box flex={1}>
                                            <h3>
                                                <a className={"gridTitle"} href={_href} target="_self">
                                                    {postDetail.title}
                                                </a>
                                            </h3>
                                        </Box>
                                        <Box flex={1}>
                                            <h5 className="subText">{postDetail.type}</h5>
                                        </Box>
                                        <Box flex={1}>
                                            <div className="portfolioImage">
                                                <img id={"thumbnailImage"} className="filmStillLine" src={_path}/>
                                            </div>
                                        </Box>
                                    </div>
                                </div>
                            </Desktop>

                            <Mobile>
                                <div className={"wrap"}>
                                    <div className="portfolioLine">
                                        <Box flex={0.5}>
                                            <h5 className="subText">{postDetail.year}</h5>
                                        </Box>
                                        <Box flex={1}>
                                            <h3><a className={"gridTitle"} href={_href} target="_self">{postDetail.title}</a></h3>
                                        </Box>
                                    </div>
                                </div>
                            </Mobile>
                        </container>
                    )
                })}
            </div>
        </div>
    )
}

export default Portfolio;