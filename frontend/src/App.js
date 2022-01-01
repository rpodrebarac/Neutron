import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/home/home";
import NavigationBar from "./components/navigation-bar/navigation-bar";
import CreateBlog from "./components/blogs/create-blog";
import ReadableBlog from "./components/blogs/readable-blog";
import Footer from "./components/footer/footer";
import FilteredHome from "./components/home/filtered-home";
import LogIn from "./components/user-authentication/log-in";
import useData from "./components/custom-hook/useData";

function App() {
    // Obtain the user's status and the "navigate" object.
    const { isPending } = useData("/api/users/status");

    return (
        <BrowserRouter>
            <div>
                {/* The blog's navigation bar. */}
                <NavigationBar />

                {/* Only one route shows at a time. */}
                <Routes>
                    {/* Each individual route or path. */}
                    <Route path="/" element={ <Home /> }></Route>
                    <Route path="/contribute" element={ !isPending ? <CreateBlog /> : <Navigate to="/log-in" /> }></Route>
                    <Route path="/log-in" element={ <LogIn /> }></Route>
                    <Route path="/:category" element={ <FilteredHome /> }></Route>
                    <Route path="/blogs/:path" element={ <ReadableBlog /> }></Route>
                </Routes>

                {/* The blog's footer. */}
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
