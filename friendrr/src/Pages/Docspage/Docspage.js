import React from "react";
import Button from "react-bootstrap/Button";
import "./Docspage.css";
import system_architecture from "../../Images/system_architecture.png";
import thread_diagram from "../../Images/thread_diagram.PNG";
import presentation from "../../Downloads/cmpt_362_final_presentation.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from "@fortawesome/free-regular-svg-icons";

const Docspage = () => {

    return (
        <div className="docspage-container">
            <div className="docspage-download-links">
                <a href={presentation} className="docspage-download-link" download="cmpt_362_final_presentation.pdf">
                    <Button variant="dark"><FontAwesomeIcon icon={faFolder}/> Download our presentation slides for more documentation </Button>
                </a>
            </div>
            <div className="docspage-figma-container">
                <h2 className="docspage-figma-desc">Figma Designs</h2>
                <iframe className="docspage-figma-design" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FQ15jmzvUp3vlhZDIjoRK87%2Fcmpt-362-android-prototype%3Fnode-id%3D0%253A1" title="Figma designs" allowfullscreen></iframe>
            </div>

            <div>
                <h2 className="docspage-desc">System Architecture</h2>
                <img className="docspage-images" src={system_architecture} alt=""/>
            </div>

            <div>
                <h2 className="docspage-desc">Thread Diagram</h2>
                <img className="docspage-images" src={thread_diagram} alt=""/>
            </div>
        </div>
    )
}

export default Docspage;