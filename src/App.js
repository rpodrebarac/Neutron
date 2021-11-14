import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import NavigationBar from "./components/navigation-bar/navigation-bar";
import CreateBlog from "./components/blogs/create-blog";

function App() {
    return (
        <BrowserRouter>
            <div>
                <NavigationBar />

                {/* Only one route shows at a time. */}
                <Routes>
                    {/* Each individual route or path. */}
                    <Route path="/" element={ <Home /> }></Route>
                    <Route path="/contribute" element={ <CreateBlog /> }></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
