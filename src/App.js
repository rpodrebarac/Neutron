import { React, useEffect, useState } from "react";
import Home from "./components/home/home";
import NavigationBar from "./components/navigation-bar/navigation-bar";

function App() {

    // Testing the backend portion.
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("/api")
            .then(response => response.json())
            .then(data => {
                setData(data.message);
                console.log(data);
            });
    }, []);

    return (
        <div>
            <NavigationBar />
            <Home />
            <p>{!data ? "Loading..." : data}</p>
        </div>
    );
}

export default App;
