import React from "react";
import HomeBlog from "../blogs/home-blog";
import IndividualHomeBlog from "../blogs/individual-home-blog";
import { Link } from "react-router-dom";
import useBlogData from "../custom-hook/useBlogData";
import "../blogs/blogs.css";
import "./home.css";

function Home() {
    // Fetch each blog's data from the database.
    const { data: blogs, isPending } = useBlogData("/api/blogs");
    const { data: homeBlog, isPending: isHomeBlogPending } = useBlogData("/api/blogs/home-blog");
    
    // Delete the "Hello, World" blog.
    if (!isPending && !isHomeBlogPending) {
        for (let i = 0; i < blogs.length; i++) {
            if (blogs[i]["title"] === homeBlog.title) {
                blogs.splice(i, 1);
            }
        }
    }

    return (
        <div>
            <div id="home-grid">
                <h1 id="home-grid__title">Explore <i>Neutron</i></h1>
                { isHomeBlogPending ? <p>Loading...</p> : <Link to={`/blogs/${homeBlog._id}`} className="links"> <HomeBlog /> </Link> }
            </div>

            {isPending ? <p>Loading blogs...</p> : blogs.map(blog => 
                <Link to={`/blogs/${blog._id}`} key={blog._id} className="links">
                    <IndividualHomeBlog 
                        image={blog.image}
                        title={blog.title}
                        category={blog.category}
                        date={blog.date}
                        description={blog.description}
                    />
                </Link>
            )}
        </div>
    )
}

export default Home;