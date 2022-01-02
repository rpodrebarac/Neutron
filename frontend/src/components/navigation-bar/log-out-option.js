import React from "react";
import { Link } from "react-router-dom";
import useData from "../custom-hook/useData";

function LogOutOption() {
    // Obtain the user's status.
    const { data: userStatus, isPending } = useData("/api/users/status");

    // To log a user out.
    function logOut() {
        // Log the user out.
        fetch("/api/users/contributors/log-out")
            .then(response => console.log(response))
            .catch(error => console.log(error));
        
        // Reload the page upon logging out.
        window.location.reload();
    }

    // Only render the option to log out if the user is logged in.
    if (!isPending && userStatus.status) {
        return (
            <div>
                <p className="navigation-bar__option-header">Contributors</p>
                <Link to="/" onClick={logOut} class="navigation-bar__blog-category">Log Out</Link>
            </div>
        )
    } else {
        return null;
    }
}

export default LogOutOption;