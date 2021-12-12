import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
    return (
        <div>
            <hr id="footer-line" />
            <div id="footer-grid__container">
                <Link to="/" id="footer-header" className="footer-grid__item"><span style={{color: "#667ba6"}}>Neutron</span> Blog</Link>
                <p>Mathematics | Physics | Chemistry | Web Development | Other</p>
            </div>
        </div>
    )
}

export default Footer;