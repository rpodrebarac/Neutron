import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
    return (
        <div>
            <hr id="footer-line" />
            <div id="footer-grid__container">
                <Link to="/" id="footer-header" className="footer-grid__item"><span style={{color: "#667ba6"}}>Neutron</span> Blog</Link>
                <span class="footer-links">
                    <Link to="/mathematics" className="links">Mathematics</Link> | <Link to="/physics" className="links">Physics</Link> | <Link to="/chemistry" className="links">Chemistry</Link> | <Link to="/web-development" className="links">Web Development</Link> | <Link to="/other" className="links">Other</Link>
                </span>
    
                <div class="footer-links extra-top-padding">
                    <Link to="/contribute" className="links">Contributors</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;