import React from "react";
import useBlogData from "../custom-hook/useBlogData";

function HomeBlog() {
    // Fetch the blogs from the backend.
    const { data: blog, isPending } = useBlogData("/api/home-blog");

    // Display the said data upon receiving it.
    function displayHomeBlogInformation(data) {
        if (!isPending) {
            return blog[data];
        }
    }

    return (
        <article id="home-blog">
            <img src={!displayHomeBlogInformation("image") ? <p>Loading Image...</p> : require(`../../images/${displayHomeBlogInformation("image")}`).default} alt={displayHomeBlogInformation("image")} id="home-blog__image" />
            <h2 className="home-blog__text">{displayHomeBlogInformation("title")}</h2>
            <p className="home-blog__text"><span className="theme-colour">{displayHomeBlogInformation("category")}</span> | {displayHomeBlogInformation("date")}</p>
            <p className="home-blog__text extra-bottom-padding">Welcome to <i>Neutron Blog</i>, where various articles pertaining to journeys through physics, mathematics, chemistry, biology, and web development occur.</p>
        </article>
    )
}

export default HomeBlog;