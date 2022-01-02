import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./log-in.css";

function LogIn() {
    // Collect data regarding the user's email and password.
    const [userLogInInformation, setuserLogInInformation] = useState({
        email: "",
        password: ""
    });

    // Access the useNavigate hook.
    const navigate = useNavigate();

    // Once the user alters the said form.
    function handleLogInInformation(event) {
        // Obtain the name of the field.
        const name = event.target.name;

        // Set the user's log in information.
        setuserLogInInformation((userLogInInformation) => ({
            ...userLogInInformation,
            [name]: event.target.value
        }));
    }

    // Once the user submits the said form.
    function handleSubmit() {
        // Send the necessary data to the backend.
        fetch("/api/users/contributors/log-in", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userLogInInformation)
        })
            .then(response => response.json())
            .then(user => console.log(user))
            .catch(error => console.log(error));

        // Navigate back to the home page.
        navigate("/");

        // Reload the page.
        window.location.reload();
    }

    return (
        <div id="log-in-container">
            <form onSubmit={handleSubmit}>
                <h1 id="log-in-title">Log In</h1>

                <label htmlFor="email">Email</label>
                <input 
                    name="email"
                    type="text"
                    placeholder="Enter Your Email"
                    onChange={event => handleLogInInformation(event)}
                    required
                />

                <label htmlFor="password">Password</label>
                <input 
                    name="password"
                    type="password"
                    placeholder="Enter Your Password"
                    onChange={event => handleLogInInformation(event)}
                    required
                />

                <button>Log In</button>
            </form>
        </div>
    )
}

export default LogIn;