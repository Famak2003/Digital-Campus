import ControlBar from "./components/ControlBar";
import Logo from "./components/logo/Logo";
import Menu from "./components/Menu";
import "./index.css";
import "./App.css";
import MapDisplay from "./components/MapDisplay";

function App() {
  return (
    <div className="App relative h-[100vh] font-raleway flex ">
      <Logo />
      <Menu />
      <MapDisplay />
      <ControlBar />
    </div>
  );
}

export default App;
