import React from "react";
import { Link } from "react-router-dom";
import useData from "../custom-hook/useData";

function LogOutOption(props) {
    // Obtain the user's status.
    const { data: userStatus, isPending } = useData("/api/users/status");

    // Only render the option to log out if the user is logged in.
    if (!isPending && userStatus.status) {
        return (
            <div>
                <p className="navigation-bar__option-header">Contributors</p>
                <Link to="/" onClick={props.logOutFunction}>Log Out</Link>
            </div>
        )
    } else {
        return null;
    }
}

export default LogOutOption;