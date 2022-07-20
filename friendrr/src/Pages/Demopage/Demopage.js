import React from "react";
import "./Demopage.css";

const Demopage = () => {

    return (
        <div className="demopage-container">
            <h1 className="demopage-desc">Check out this video demonstration of the Friendrr app!</h1>
            <iframe className="demopage-vid" src="https://www.youtube.com/embed/KQ7Mk3--eKY" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Demopage;