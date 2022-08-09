import React from "react";
import "./Aboutpage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Aboutpage = () => {

    return (
        <div className="aboutpage-container">

            <div className="aboutpage-desc">
                <h1>We are Friendrr!</h1>
                <h6>Providing the means to make friends</h6>
            </div>
            <br></br><br></br>

            <h3>Meet the team and their contributions</h3>
            <div className="aboutpage-people">
                <div className="aboutpage-person">
                    <h4><a className="github-link" href="https://github.com/aandrewfang" target="blank"><FontAwesomeIcon icon={faGithub}/></a>  Andrew</h4>
                    <ul>
                        <li>Swiping and matching workflow with audio playback</li>
                        <li>Created the search algorithm for finding matches</li>
                        <li>Bottom navigation bar</li>
                        <li>Rock paper scissor minigame</li>
                        <li>Global leaderboard for games</li>
                        <li>UI/Feature Enhancement</li>
                        <li>Linking back-end with front-end</li>
                        <li>Bug fixing</li>
                        <li>Testing</li>
                    </ul>
                </div>
                <div className="aboutpage-person">
                    <h4><a className="github-link" href="https://github.com/benjaminreedel" target="blank"><FontAwesomeIcon icon={faGithub}/></a>  Ben</h4>
                    <ul>
                        <li>Implemented the real time chat messaging</li>
                        <li>Mini game integration</li>
                        <li>Added color theme</li>
                        <li>UI/Feature Enhancement</li>
                        <li>Linking back-end with front-end</li>
                        <li>Bug fixing</li>
                        <li>Testing</li>
                    </ul>
                </div>
                <div className="aboutpage-person">
                    <h4><a className="github-link" href="https://github.com/kaybo" target="blank"><FontAwesomeIcon icon={faGithub}/></a>  Feng</h4>   
                    <ul>
                        <li>Swiping and matching workflow with audio playback</li>
                        <li>Created the search algorithm for finding matches</li>
                        <li>Add and remove matched users and friends workflow</li>
                        <li>View match history list</li>
                        <li>Login and Register workflow</li>
                        <li>Photo guessing minigame</li>
                        <li>Global leaderboard for games</li>
                        <li>UI/Feature Enhancement</li>
                        <li>Linking back-end with front-end</li>
                        <li>Bug fixing</li>
                        <li>Testing</li>
                    </ul>
                    
                </div>
                <div className="aboutpage-person">
                    <h4><a className="github-link" href="https://github.com/DabbaML" target="blank"><FontAwesomeIcon icon={faGithub}/></a>  Martin</h4>
                    <ul>
                        <li>Icon/Loading screen asset</li>
                        <li>Card matching minigame</li>
                        <li>UI/Feature Enhancement</li>
                        <li>Linking back-end with front-end</li>
                        <li>Bug fixing</li>
                        <li>Testing</li>
                    </ul>
                </div>
                <div className="aboutpage-person">
                    <h4><a className="github-link" href="https://github.com/sterlst" target="blank"><FontAwesomeIcon icon={faGithub}/></a>  Sterling</h4> 
                    <ul>
                        <li>Profile Setup and edit workflows</li>
                        <li>Website creation and management</li>
                        <li>Data/error validation handling</li>
                        <li>UI/Feature Enhancement</li>
                        <li>Linking back-end with front-end</li>
                        <li>Bug fixing</li>
                        <li>Testing</li>
                    </ul>  
                </div>
            </div>
        </div>
    )
}

export default Aboutpage;