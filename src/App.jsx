import LineCharts from "./components/LineCharts/LineCharts";
import Phone from "./components/Phones/Phone"
import "./App.css";
// import DaisyNav from "./components/daisyNav/DaisyNav";
import NavBar from "./NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <div className="bg-amber-900 md:px-48">
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
        <h1 className="text-6xl bg-pink-900  text-center">Vite React</h1>

        <PriceOptions></PriceOptions>

        <LineCharts></LineCharts>

        <Phone></Phone>
      </div>
    </>
  );
}

export default App;
