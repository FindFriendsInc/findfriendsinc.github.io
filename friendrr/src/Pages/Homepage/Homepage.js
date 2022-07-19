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
            <h6>Finding friends can be hard, but we've got you covered!</h6>
            <Button className="homepage-btn" variant="dark"><FontAwesomeIcon icon={faGithub}/> View Project</Button>
            <Button className="homepage-btn" variant="dark"><FontAwesomeIcon icon={faFolder}/> Download APK</Button>

            <div className="homepage-desc">
                <p>
                    FindFriendsInc is bringing people together with our brand new Friendrr app. <br></br><br></br>And it's easy! <br></br><br></br>
                    Friendrr is an Android app that will allow you to match with others who share similar interests and hobbies. Simply setup a profile and begin swiping to find like-minded individuals.
                    After successfully matching with someone, you can get to know them better by using our chat system and games room.
                </p>
            </div>
            
        </div>
    )
}

export default Homepage;