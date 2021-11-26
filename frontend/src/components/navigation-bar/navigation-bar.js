import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavigationBar() {

    // Leave the state of the navigation bar open.
    const [open, setOpen] = useState(false);
    const [classname, setClassname] = useState(null);

    // Function for opening and closing the navigation bar.
    function openNavigationBar() {
        if (open) {
            setClassname("null");
            setOpen(false);
        } else {
            setClassname("navigation-bar__open")
            setOpen(true);
        }
    }

    return (
        <nav className={classname}>
            <Link to="/" id="navigation-bar__header"><span style={{color: "#667ba6"}}>Neutron</span> Blog</Link>
            <span id="navigation-bar__button" onClick={openNavigationBar}>&#8801;</span>
        </nav>
    )
}

export default NavigationBar;