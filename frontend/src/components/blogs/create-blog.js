import React, { useState } from "react";

function CreateBlog() {

    // Store the data entered by the user for each blog.
    const [newBlogInformation, setNewBlogInformation] = useState({
        title: "",
        date: new Date().toLocaleDateString(),
        category: "",
        description: "",
        content: ""
    });

    // Handle the alterations to each portion of blog information.
    function handleNewBlogInformationAlteration(event) {
        // Obtain the name from the said input.
        const name = event.target.name;

        // Set the state value (which corresponds to the name).
        setNewBlogInformation((newBlogInformation) => ({
            ...newBlogInformation,
            [name]: event.target.value,
        }));
    }

     // Send a POST request of the new blog.
    function handleSubmit() {
        fetch("/api/contribute", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBlogInformation)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    name="title"
                    type="text"
                    placeholder="Title"
                    value={newBlogInformation.title}
                    onChange={event => handleNewBlogInformationAlteration(event)}
                    required
                />

                <input 
                    name="category"
                    type="text"
                    placeholder="Category"
                    value={newBlogInformation.category}
                    onChange={event => handleNewBlogInformationAlteration(event)}
                    required
                />

                <input 
                    name="description"
                    type="text"
                    placeholder="Description"
                    value={newBlogInformation.description}
                    onChange={event => handleNewBlogInformationAlteration(event)}
                    required
                />

                <textarea name="content" placeholder="Content" value={newBlogInformation.content} onChange={event => handleNewBlogInformationAlteration(event)} required></textarea>

                <button type="submit">Post Blog</button>
            </form>
        </div>
    )
}

export default CreateBlog;