import React, { useState } from "react";
import { Link } from "react-router-dom";
import useData from "../custom-hook/useData";
import LogOutOption from "./log-out-option";
import "./navigation-bar.css";

function NavigationBar() {

    // Leave the state of the navigation bar open.
    const [open, setOpen] = useState(false);
    const [classname, setClassname] = useState(null);

    // Obtain the user's status.
    const { data: user, isPending } = useData("/api/users/status");

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

    // To log a user out.
    function logOut() {
        fetch("/api/users/contributors/log-out")
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    return (
        <nav className={classname}>
            <Link to="/" id="navigation-bar__header"><span style={{color: "#667ba6"}}>Neutron</span> Blog</Link>
            <span>{ !isPending ? "Welcome, " + user.firstName : "" }</span>
            <span id="navigation-bar__button" onClick={openNavigationBar}>&#8801;</span>

            {/* Links to each major blog category. */}
            <div id="navigation-bar__blog-categories">
                {/* Blog categories (akin to filters). */}
                <p className="navigation-bar__option-header">Explore Blogs by Category</p>
                <Link to="/mathematics" className="navigation-bar__blog-category" onClick={openNavigationBar}>Mathematics</Link>
                <Link to="/physics" className="navigation-bar__blog-category" onClick={openNavigationBar}>Physics</Link>
                <Link to="/chemistry" className="navigation-bar__blog-category" onClick={openNavigationBar}>Chemistry</Link>
                <Link to="/web-development" className="navigation-bar__blog-category" onClick={openNavigationBar}>Web Development</Link>
                <Link to="/other" className="navigation-bar__blog-category" onClick={openNavigationBar}>Other</Link>

                {/* Contributors' log out option. */}
                <LogOutOption logOutFunction={logOut} />
            </div>
        </nav>
    )
}

export default NavigationBar;