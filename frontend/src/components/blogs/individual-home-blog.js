import React from "react";
import ReactMarkdown from "react-markdown";

function IndividualHomeBlog(props) {
    return (
        <article className="individual-home-blog-container">
            <img src={!props.image ? <p>Loading...</p> : require(`../../images/${props.image}`).default} alt={props.image} className="individual-home-blog__image" />
            <div className="individual-home-blog-text">
                <h2>{props.title}</h2>
                <p><span style={{color: "#667ba6"}}>{props.category}</span> | {props.date}</p>
                <div><ReactMarkdown children={props.description} /></div>
            </div>
        </article>
    )
}

export default IndividualHomeBlog;