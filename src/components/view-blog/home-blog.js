import React from "react";
import magnetar from "../../images/magnetar.jpg";

function HomeBlog() {
    return (
        <article id="home-blog">
            <img src={magnetar} alt="Magnetar." id="home-blog__image" />
            <h2 class="home-blog__text">Hello, World</h2>
            <p class="home-blog__text"><span style={{color: "#667ba6"}}>Other</span> | October 10, 2021</p>
            <p class="home-blog__text extra-bottom-padding">Welcome to <i>Neutron Blog</i>, where various articles pertaining to journeys through physics, mathematics, chemistry, biology, and web development occur.</p>
        </article>
    )
}

export default HomeBlog;