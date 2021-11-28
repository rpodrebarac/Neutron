import React from "react";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import magnetar from "../../images/magnetar.jpg";
import useBlogData from "../custom-hook/useBlogData";

function ReadableBlog() {
    // Obtain the path of each blog and the blogs from the database. 
    const { path } = useParams();
    const { data: blogs, isPending } = useBlogData("/api");

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
        <div>
            <h1>{readingBlog("title")}</h1>
            <p>{readingBlog("description")}</p>

            <img src={magnetar} alt="Magnetar." />
            <div><ReactMarkdown children={readingBlog("content")} /></div>
        </div>
    )
}

export default ReadableBlog;