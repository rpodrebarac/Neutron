import IndividualHomeBlog from "./components/view-blog/individual-home-blog";
import Home from "./components/view-home/home";
import NavigationBar from "./components/view-navigation-bar/navigation-bar";
import magnetar from "./images/magnetar.jpg";

function App() {
    return (
        <div>
            <NavigationBar />
            <Home />
            <IndividualHomeBlog image={magnetar} altText={"Magnetar."} title="Grasping Kinematics: Part 1" category="Chemistry" date="October 10, 2021" description="Hello." />
        </div>
    );
}

export default App;
