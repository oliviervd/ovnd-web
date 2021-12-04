import React from "react";
import projectData from "../data/projectsMusic.json";
import { Box } from "rebass"
import { useMediaQuery } from "react-responsive";
import Footer from "../footer/footer";


const Portfolio = () => {

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
        <div>
            {projectData.map((postDetail, index)=>{

                //fetch img from db and construct path.
                const _href = "/music/"+ postDetail.id;
                return (
                    <container>
                        <Desktop>
                            <div className={"wrap"}>
                                <div className="portfolioLine">
                                    <Box flex={0.5}>
                                        <h5 className="subText">{postDetail.year}</h5>
                                    </Box>
                                    <Box flex={1}>
                                        <h3><a href={_href} target="_self">{postDetail.title}</a></h3>
                                    </Box>
                                    <Box flex={1}>
                                        <h5 className="subText">{postDetail.type}</h5>
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
                                        <h3><a href={_href} target="_self">{postDetail.title}</a></h3>
                                    </Box>
                                </div>
                            </div>
                        </Mobile>
                    </container>
                )
            })}
        </div>
    )
}

export default Portfolio;