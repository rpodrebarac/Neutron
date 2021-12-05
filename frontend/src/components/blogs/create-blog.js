import React, { useState } from "react";

function CreateBlog() {

    // Store the data entered by the user for each blog.
    const [newBlogInformation, setNewBlogInformation] = useState({
        title: "",
        date: new Date().toLocaleDateString(),
        category: "",
        description: "",
        content: "",
        image: "idea.png"
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
                {/* Essential blog information. */}
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

                {/* Image selection. */}
                <select name="image" onChange={event => handleNewBlogInformationAlteration(event)} required>
                    <option value="idea.png">Idea (Default Image)</option>
                    <option value="magnetar.jpg">Magnetar</option>
                    <option value="molecule.png">Molecule</option>
                    <option value="system-of-equations.png">Mathematics</option>
                    <option value="periodic-table.png">Periodic Table</option>
                    <option value="earth-from-space.png">Earth from Space</option>
                    <option value="sun.png">The Sun</option>
                </select>

                {/* Image preview. */}
                <img src={!newBlogInformation.image ? <p>Loading Image...</p> : require(`../../images/${newBlogInformation.image}`).default} alt="Your preview is unavailable at the moment." />

                <button type="submit">Post Blog</button>
            </form>
        </div>
    )
}

export default CreateBlog;