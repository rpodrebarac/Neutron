import React from "react";
import HomeBlog from "../blogs/home-blog";
import IndividualHomeBlog from "../blogs/individual-home-blog";
import magnetar from "../../images/magnetar.jpg";

function Home() {
    return (
        <div>
            <div id="home-grid">
                <h1 id="home-grid__title">Explore Blogs</h1>
                <HomeBlog />
            </div>

            <IndividualHomeBlog image={magnetar} altText={"Magnetar."} title="Grasping Kinematics: Part 1" category="Physics" date="October 10, 2021" description="Hello." />
        </div>
    )
}

export default Home;