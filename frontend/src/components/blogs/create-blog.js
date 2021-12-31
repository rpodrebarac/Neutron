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
        fetch("/api/blogs/contribute", {
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
            <h1 id="create-blog-title">Contribute</h1>

            <form onSubmit={handleSubmit} id="create-blog-form-container">
                {/* Essential blog information. */}
                <label htmlFor="title">Title</label>
                <input 
                    name="title"
                    type="text"
                    placeholder="A Descriptive Title for the Blog."
                    value={newBlogInformation.title}
                    onChange={event => handleNewBlogInformationAlteration(event)}
                    required
                />

                <label htmlFor="category">Category</label>
                <input 
                    name="category"
                    type="text"
                    placeholder="A Category for the Blog."
                    value={newBlogInformation.category}
                    onChange={event => handleNewBlogInformationAlteration(event)}
                    required
                />

                <label htmlFor="description">Description</label>
                <input 
                    name="description"
                    type="text"
                    placeholder="A Sentence or Two That Describes the Blog."
                    value={newBlogInformation.description}
                    onChange={event => handleNewBlogInformationAlteration(event)}
                    required
                />

                <label htmlFor="content">Content</label>
                <textarea name="content" placeholder="Write the Blog in Markdown Format." value={newBlogInformation.content} onChange={event => handleNewBlogInformationAlteration(event)} required></textarea>

                {/* Image selection. */}
                <div id="create-blog-image-container">
                    <div>
                        <label htmlFor="image">Blog Image</label>
                        <select name="image" onChange={event => handleNewBlogInformationAlteration(event)} required>
                            <option value="idea.png">Idea (Default Image)</option>
                            <option value="magnetar.jpg">Magnetar</option>
                            <option value="molecule.png">Molecule</option>
                            <option value="system-of-equations.png">Mathematics</option>
                            <option value="periodic-table.png">Periodic Table</option>
                            <option value="earth-from-space.png">Earth from Space</option>
                            <option value="sun.png">The Sun</option>
                        </select>
                    </div>

                    {/* Image preview. */}
                    <img src={!newBlogInformation.image ? <p>Loading Image...</p> : require(`../../images/${newBlogInformation.image}`).default} alt="Your preview is unavailable at the moment." id="create-blog-image" />
                </div>

                {/* Form submission. */}
                <button type="submit">Post Blog</button>
            </form>
        </div>
    )
}

export default CreateBlog;