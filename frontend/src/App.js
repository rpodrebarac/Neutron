import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import NavigationBar from "./components/navigation-bar/navigation-bar";
import CreateBlog from "./components/blogs/create-blog";
import ReadableBlog from "./components/blogs/readable-blog";
import Footer from "./components/footer/footer";

function App() {
    return (
        <BrowserRouter>
            <div>
                {/* The blog's navigation bar. */}
                <NavigationBar />

                {/* Only one route shows at a time. */}
                <Routes>
                    {/* Each individual route or path. */}
                    <Route path="/" element={ <Home /> }></Route>
                    <Route path="/contribute" element={ <CreateBlog /> }></Route>
                    <Route path="/blogs/:path" element={ <ReadableBlog /> }></Route>
                </Routes>

                {/* The blog's footer. */}
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
