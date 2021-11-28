import React from "react";

function IndividualHomeBlog(props) {
    return (
        <article className="view-blog-container">
            <img src={props.image} alt={props.altText} className="view-blog__image" />
            <div>
                <h2>{props.title}</h2>
                <p><span style={{color: "#667ba6"}}>{props.category}</span> | {props.date}</p>
                <p>{props.description}</p>
            </div>
        </article>
    )
}

export default IndividualHomeBlog;