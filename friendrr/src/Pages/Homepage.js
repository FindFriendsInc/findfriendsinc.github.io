import React from "react";
import Button from "react-bootstrap/Button";
import "./Homepage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"



const Homepage = () => {

    return (
        <div className="homepage-container">
            <h1>Friendrr</h1>
            <p>Knowing where to find friends can be hard, but we got you covered!</p>
            <Button className="homepage-btn"><FontAwesomeIcon icon={faGithub}/> View Project</Button>
            <Button className="homepage-btn"><FontAwesomeIcon icon={faFolder}/> Download APK</Button>
        </div>
    )
}

export default Homepage;