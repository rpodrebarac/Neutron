import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import NavigationBar from "./components/navigation-bar/navigation-bar";

function App() {
    return (
        <BrowserRouter>
            <div>
                <NavigationBar />

                {/* Only one route shows at a time. */}
                <Routes>
                    {/* Each individual route or path. */}
                    <Route path="/" element={ <Home /> }></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
