import React from "react";
import ReactMarkdown from "react-markdown";
import useData from "../custom-hook/useData";

function HomeBlog() {
    // Fetch the blogs from the backend.
    const { data: blog, isPending } = useData("/api/blogs/home-blog");

    // Display the said data upon receiving it.
    function displayHomeBlogInformation(data) {
        if (!isPending) {
            return blog[data];
        }
    }

    return (
        <article id="home-blog">
            <img src={ !displayHomeBlogInformation("image") ? <p>Loading Image...</p> : require(`../../images/${displayHomeBlogInformation("image")}`).default } alt={ displayHomeBlogInformation("image") } id="home-blog__image" />
            <h2 className="home-blog__text">{ displayHomeBlogInformation("title") }</h2>
            <p className="home-blog__text"><span className="theme-colour">{ displayHomeBlogInformation("category") }</span> | { displayHomeBlogInformation("date") }</p>
            <div className="home-blog__text extra-bottom-padding"><ReactMarkdown children={ displayHomeBlogInformation("description") } /></div>
        </article>
    )
}

export default HomeBlog;