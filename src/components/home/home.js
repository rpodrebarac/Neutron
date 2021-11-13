import React, { useEffect, useState } from "react";
import HomeBlog from "../blogs/home-blog";
import IndividualHomeBlog from "../blogs/individual-home-blog";
import magnetar from "../../images/magnetar.jpg";

function Home() {
    // Store the blogs.
    const [blogs, setBlogs] = useState(null);

    // Fetch the blog data from the database.
    useEffect(() => {
        fetch("/api")
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <div id="home-grid">
                <h1 id="home-grid__title">Explore Blogs</h1>
                <HomeBlog />
            </div>

            {!blogs ? <p>Loading blogs...</p> : blogs.map(blog => 
                <IndividualHomeBlog 
                    image={magnetar}
                    altText={"Magnetar."}
                    title={blog.title}
                    category={blog.category}
                    date={blog.date}
                    description={blog.description}
                />
            )}
        </div>
    )
}

export default Home;