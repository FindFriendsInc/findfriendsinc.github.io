import React from "react";
import Button from "react-bootstrap/Button";
import "./Homepage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import friendrr from "../../Downloads/friendrr.apk"
import presentation from "../../Downloads/cmpt_362_final_presentation.pdf";
import friendrrzip from "../../Downloads/friendrr.zip";



const Homepage = () => {

    return (
        <div className="homepage-container">
            <h1>Friendrr</h1>
            <h6>Finding friends can be hard, but we've got you covered!</h6>
            <a className="docspage-download-link" href={presentation} download="cmpt_362_final_presentation.pdf">
                <Button className="homepage-btn" variant="dark"><FontAwesomeIcon icon={faFolder}/> Download slides</Button>
            </a>
            <a href={friendrrzip} download="friendrr_project">
                <Button className="homepage-btn" variant="dark"><FontAwesomeIcon icon={faFolder}/> Download .zip</Button>
            </a>
            <a href={friendrr} download="friendrr.apk">
                <Button className="homepage-btn" variant="dark"><FontAwesomeIcon icon={faFolder}/> Download APK</Button>
            </a>
            <div className="homepage-desc">
                <p>FindFriendsInc is bringing people together with our Friendrr app.</p>
                <br></br>
                <p><a href={friendrr} download="friendrr.apk">Download the APK</a> to get started. It's easy! </p>
                <br></br>
                <p>
                    Friendrr is an Android app that will allow you to match with others who share similar interests and hobbies. Simply setup a profile and begin swiping to find like-minded individuals.
                    After successfully matching with someone, you can get to know them better by using our chat system and games room.
                </p>
            </div>


            
        </div>
    )
}

export default Homepage;