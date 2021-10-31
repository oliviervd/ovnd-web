import React from "react";
import projectData from "../data/projects.json";
import { Box } from "rebass"

const Portfolio = () => {


    return (
        <div>
            {projectData.map((postDetail, index)=>{

                //fetch img from db and construct path.
                const imgSrc = "/media/img/" + postDetail.img;
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
                                {/*<iframe
                                    width='640px'
                                    height='200px'
                                    src={postDetail.source}
                                    frameBorder='0'
                                    allow = "autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen>
                                </iframe>*/}
                            </Box>
                            <Box flex={2}>
                                <h3>{postDetail.title}</h3>
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