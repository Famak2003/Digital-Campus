import ZOOMIN from "./../asset/icons8-zoom-in-50.png";
import ZOOMOUT from "./../asset/icons8-zoom-out-50.png";
import TARGET from "./../asset/icons8-target-50.png";
import BACK from "./../asset/icons8-back-50.png";
import ENTER from "./../asset/icons8-to-come-50.png";
import RESET from "./../asset/icons8-reset-50.png";

import Button from "../utilities/Button";
import SideBar from "../utilities/Sidebar";

const controlBarContent = [
  { icon: ZOOMIN, text: "Zoom in" },
  { icon: ZOOMOUT, text: "Zoom out" },
  { icon: TARGET, text: "Target" },
  { icon: BACK, text: "Back" },
  { icon: ENTER, text: "Enter" },
  { icon: RESET, text: "Reset" },
];

function ControlBar() {
  return (
    <div className=" w-[14%] md:w-[10%]">
      <SideBar SidebarBtn={Button} sidebarContent={controlBarContent} />
    </div>
  );
}

export default ControlBar;
