import React, { useState } from "react";

function LogIn() {
    // Collect data regarding the user's email and password.
    const [userLogInInformation, setuserLogInInformation] = useState({
        email: "",
        password: ""
    });

    // Once the user alters the said form.
    function handleLogInInformation(event) {
        const name = event.target.name;
        setuserLogInInformation((userLogInInformation) => ({
            ...userLogInInformation,
            [name]: event.target.value
        }));

        console.log(userLogInInformation);
    }

    // Once the user submits the said form.
    function handleSubmit(event) {
        event.preventDefault();

        fetch("/api/users/contributors/log-in", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userLogInInformation)
        })
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log(error));
    }

    return (
        <div>
            <form onSubmit={event => handleSubmit(event)}>
                <h2>Log In</h2>
                <input 
                    name="email"
                    type="text"
                    placeholder="Email"
                    onChange={event => handleLogInInformation(event)}
                    required
                />

                <input 
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={event => handleLogInInformation(event)}
                    required
                />

                <button>Log In</button>
            </form>
        </div>
    )
}

export default LogIn;