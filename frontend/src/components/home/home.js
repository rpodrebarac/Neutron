import React from "react";
import HomeBlog from "../blogs/home-blog";
import IndividualHomeBlog from "../blogs/individual-home-blog";
import magnetar from "../../images/magnetar.jpg";
import { Link } from "react-router-dom";
import useBlogData from "../custom-hook/useBlogData";

function Home() {
    // Fetch each blog's data from the database.
    const { data: blogs, isPending } = useBlogData("/api");
    const { data: homeBlog, isPending: isHomeBlogPending } = useBlogData("/api/home-blog");
    
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
                <h1 id="home-grid__title">Explore Blogs</h1>
                { isHomeBlogPending ? <p>Loading...</p> : <Link to={`/blogs/${homeBlog._id}`}> <HomeBlog /> </Link> }
            </div>

            {isPending ? <p>Loading blogs...</p> : blogs.map(blog => 
                <Link to={`/blogs/${blog._id}`} key={blog._id}>
                    <IndividualHomeBlog 
                        image={magnetar}
                        altText={"Magnetar."}
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