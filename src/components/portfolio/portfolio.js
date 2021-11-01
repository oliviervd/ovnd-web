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
                    <div className="wrap">
                        <Box className="vimeoBox">
                            <Box flex={1}>

                            </Box>
                            <Box flex={1}>
                                <img className="cover"
                                    src={imgSrc}
                                    width='320px'
                                    height='180px'>
                                </img>
                            </Box>
                            <Box flex={2}>
                                <h3><a href={_href} target="_self">{postDetail.title}</a></h3>
                                <h5>{postDetail.year} - {postDetail.type}</h5>
                                <p>
                                    {postDetail.description}
                                </p>
                            </Box>
                        </Box>
                    </div>
                )
            })}
        </div>
    )
}

export default Portfolio;