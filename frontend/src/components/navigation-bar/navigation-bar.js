import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navigation-bar.css";

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

            {/* Links to each major blog category. */}
            <div id="navigation-bar__blog-categories">
                {/* Blog categories (akin to filters). */}
                <p className="navigation-bar__option-header">Explore Blogs by Category</p>
                <Link to="/" className="navigation-bar__blog-category" onClick={openNavigationBar}>Mathematics</Link>
                <Link to="/" className="navigation-bar__blog-category" onClick={openNavigationBar}>Physics</Link>
                <Link to="/" className="navigation-bar__blog-category" onClick={openNavigationBar}>Chemistry</Link>
                <Link to="/" className="navigation-bar__blog-category" onClick={openNavigationBar}>Web Development</Link>
                <Link to="/" className="navigation-bar__blog-category" onClick={openNavigationBar}>Other</Link>

                {/* TODO: To the said blog's "Contribute" page. */}
            </div>
        </nav>
    )
}

export default NavigationBar;