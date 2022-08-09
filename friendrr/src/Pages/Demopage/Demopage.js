import React from "react";
import "./Demopage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from "@fortawesome/free-brands-svg-icons"

const Demopage = () => {

    return (
        <div className="demopage-container">
            <div className="demopage-video-links">
                <a className="video-link" href="https://www.youtube.com/watch?v=0OC6Z8mG1tA" target="blank"><FontAwesomeIcon color="red" icon={faYoutube}/> Project Pitch </a>
                <a className="video-link" href="https://www.youtube.com/watch?v=KQ7Mk3--eKY" target="blank"><FontAwesomeIcon color="red" icon={faYoutube}/> Show and Tell One </a>
                <a className="video-link" href="https://www.youtube.com/watch?v=XU4oUCPs9-M" target="blank"><FontAwesomeIcon color="red" icon={faYoutube}/> Show and Tell Two </a>
                <a className="video-link" href="https://www.youtube.com/watch?v=8Gzsdqk4x_Q" target="blank"><FontAwesomeIcon color="red" icon={faYoutube}/> Final Demo </a>
            </div>
            <div className="demopage-video-container">
                <iframe className="demopage-video" src="https://www.youtube.com/embed/0OC6Z8mG1tA" title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="demopage-video-container">
                <iframe className="demopage-video" src="https://www.youtube.com/embed/KQ7Mk3--eKY" title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="demopage-video-container">
                <iframe className="demopage-video" src="https://www.youtube.com/embed/XU4oUCPs9-M" title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="demopage-video-container">
            <iframe className="demopage-video" src="https://www.youtube.com/embed/8Gzsdqk4x_Q" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Demopage;