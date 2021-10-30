import React from "react";
import projectData from "../data/projects.json";
import { Box } from "rebass"

const Portfolio = () => {
    return (
        <div>
            {projectData.map((postDetail, index)=>{
                return (
                    <div className="wrap">
                        <Box className="vimeoBox">
                            <Box flex={2}>
                                <iframe
                                    width='640px'
                                    height='480px'
                                    src={postDetail.source}
                                    frameBorder='0'
                                    allow = "autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen>
                                </iframe>
                            </Box>
                            <Box flex={2}>
                                <h3>{postDetail.title}</h3>
                                <h5>{postDetail.year}</h5>
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