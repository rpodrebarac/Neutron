import React from "react";
import { Link, useParams } from "react-router-dom";
import useData from "../custom-hook/useData";
import IndividualHomeBlog from "../blogs/individual-home-blog";
import "./home.css";

function FilteredHome() {
    // "Formalize" all words in a string.
    const formalize = string => {
        // Capitalize the first letter of the said string.
        string = string.charAt(0).toUpperCase() + string.slice(1);

        // Replace all dashes with spaces.
        string = string.replace("-", " ");

        // Capitalize the first letter of all words.
        for (let i = 0; i < string.length; i++) {
            if (string[i] === " ") {
                string = string.replace(string[i + 1], string[i + 1].toUpperCase());
            }
        }

        return string;
    }

    // Obtain the filter category and all blogs under such a category (make the said category's first letter uppercase as well).
    const { category } = useParams();
    const { data: blogs, isPending } = useData(`/api/blogs/filter/${formalize(category)}`);

    return (
        <div>
            {/* The said filtered category. */}
            <div id="filtered-home-category">
                <h1 id="filtered-home-category__title">{ formalize(category) }</h1>
            </div>

            {/* A list of all the blogs under that category. */}
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

export default FilteredHome;