import React from "react";
import projectData from "../data/projects.json";
import { Box } from "rebass"

const Portfolio = () => {


    return (
        <div>
            {projectData.map((postDetail, index)=>{

                //fetch img from db and construct path.
                const imgSrc = "/media/img/" + postDetail.img;
                const _href = "/music/"+ postDetail.id;
                return (
                    <div className={"wrap"}>
                        <div className="portfolioLine">
                            <Box flex={0.5}>
                                <h5 className="subText">{postDetail.year}</h5>
                            </Box>
                            <Box flex={1}>
                                <h3><a href={_href} target="_self">{postDetail.title}</a></h3>
                            </Box>
                            <Box flex={2} className="gridInfo">
                                <h5 className="subText">{postDetail.type}</h5>
                            </Box>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Portfolio;