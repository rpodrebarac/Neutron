import React from "react";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import useBlogData from "../custom-hook/useBlogData";

function ReadableBlog() {
    // Obtain the path of each blog and the blogs from the database. 
    const { path } = useParams();
    const { data: blogs, isPending } = useBlogData("/api/blogs");

    // Loop through all blogs (once they have loaded) and return the blog that matches the path of the selected blog.
    const readingBlog = (data) => {
        if (!isPending) {
            for (let blog of blogs) {
                if (blog._id === path) {
                    return isPending ? "Loading..." : blog[data];
                }
            }
        }
    }

    return (
        <div className="readable-blog-container">
            {/* Main blog section. */}
            <h1 className="readable-blog-title">{ readingBlog("title") }</h1>
            <ReactMarkdown children={ readingBlog("description") } className="readable-blog-description"/>

            <img src={ !readingBlog("image") ? <p>Loading...</p> : require(`../../images/${readingBlog("image")}`).default } alt="Failed to load." className="readable-blog-image" />
            <p className="readable-blog-category-and-date"><span className="theme-colour">{ readingBlog("category") }</span> | { readingBlog("date") }</p>
            <ReactMarkdown children={ readingBlog("content") } className="readable-blog-content" />

            {/* About the author section. */}
            <hr className="theme-colour" style={{ "width": "100%" }} />
            <div className="readable-blog-author-container">
                <p>
                    <b>Henry Righton</b> hopes to always be learning. 
                    He derives pleasure by writing about a variety of topics.
                    He regularly writes in <i>Neutron Blog</i>.
                </p>
            </div>

            {/* Bottom overhanging section. */}
            <div className="readable-blog-overhang">
                <h3 id="readable-blog-overhang__left">{ readingBlog("title") }</h3>
                <p id="readable-blog-overhang__right"><b>{ readingBlog("date") }</b></p>
            </div>
        </div>
    )
}

export default ReadableBlog;