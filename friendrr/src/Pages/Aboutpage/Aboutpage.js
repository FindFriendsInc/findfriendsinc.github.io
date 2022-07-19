import React from "react";
import "./Aboutpage.css";

const Aboutpage = () => {

    return (
        <div className="aboutpage-container">

            <div className="aboutpage-desc">
                <h1>We are Friendrr!</h1>
                <h6>Providing the means to make friends</h6>
            </div>

            <div className="aboutpage-problem">
                    <h4>The problem:</h4>
                    <ul>
                        <li>It can be difficult to meet new people</li>
                        <li>Feeling lonely in a digital world</li>
                        <li>Hard to find people with similar hobbies</li>
                        <li>Meeting people outside of your comfort zone is scary</li>
                    </ul>
                </div>

                <div className="aboutpage-solution">
                    <h4>Our solution:</h4>
                    <ul>
                        <li>Friendrr allows people to connect together with similar interests</li>
                        <li>Voice recording of the user provides a more authentic experience</li>
                        <li>Swipe left to decline, swipe right to accept</li>
                        <li>Use the friends list to connect and chat with matches at any time</li>
                    </ul>
                </div>

            <h3>Meet the team</h3>
            <div className="aboutpage-people">
                <div className="aboutpage-person">
                    <h4>Ahhhh</h4>
                    <p>An absolute legend</p>
                    <p>Github: </p>
                    <p>LinkedIn: </p>
                </div>
                <div className="aboutpage-person">
                    <h4>Ben</h4>
                    <p>An absolute legend</p>
                    <p>Github: </p>
                    <p>LinkedIn: </p>
                </div>
                <div className="aboutpage-person">
                    <h4>L2P</h4>
                    <p>An absolute legend</p>
                    <p>Github: </p>
                    <p>LinkedIn: </p>
                </div>
                <div className="aboutpage-person">
                    <h4>Sterls</h4>
                    <p>An absolute legend</p>
                    <p>Github: </p>
                    <p>LinkedIn: </p>
                </div>
                <div className="aboutpage-person">
                    <h4>zxcvbnm</h4>
                    <p>An absolute legend</p>
                    <p>Github: </p>
                    <p>LinkedIn: </p>
                </div>
            </div>
        </div>
    )
}

export default Aboutpage;