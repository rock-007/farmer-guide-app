import logo from "./logo.svg";
import FarmerGuide from "./containers/FarmerGuide";
import Header from "./components/Header";
import "./App.css";

function App() {
    return (
        <>
            <div className="App" >
                <Header />
                <FarmerGuide />
            </div>
        </>
    );
}

export default App;
