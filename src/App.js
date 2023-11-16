import ControlBar from "./components/ControlBar";
import Logo from "./components/logo/Logo";
import Menu from "./components/Menu/Menu";
import "./index.css";
import "./App.css";
import DisplayComp from "./components/DisplayComp";

function App() {
  return (
    <div className="App relative h-[63rem] font-raleway flex ">
      <Logo />
      <Menu />
      <DisplayComp />
      <ControlBar />
    </div>
  );
}

export default App;
