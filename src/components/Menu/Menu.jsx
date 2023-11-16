import SEARCHIMG from "./../../asset/icons8-search-60.png";
import LOCATIONIMG from "./../../asset/icons8-place-marker-60.png";
import DEVICESIMG from "./../../asset/icons8-multiple-devices-60.png";
import CATERINGIMG from "./../../asset/icons8-bread-60.png";
import CONTROLIMG from "./../../asset/icons8-project-setup-60.png";
import SETTINGIMG from "./../../asset/icons8-settings-60.png";
import SideBar from "../../utilities/Sidebar";
import Button from "../../utilities/Button";

import MENUIMG from "./../../asset/icons8-menu-vertical-50.png";
import { useEffect, useRef, useState } from "react";
import MenuIcon from "./MenuIcon";

// import Button from "../utilities/Button";

const menuContent = [
  { icon: SEARCHIMG, text: "Search" },
  { icon: LOCATIONIMG, text: "Places" },
  { icon: DEVICESIMG, text: "Devices" },
  { icon: CATERINGIMG, text: "Catering" },
  { icon: CONTROLIMG, text: "Controls" },
  { icon: SETTINGIMG, text: "Settings" },
];

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  //handles menu switch
  function handleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  // handle outside clicks to close the menu
  useEffect(function () {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) setIsMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
  });

  return (
    <menu className="md:relative absolute h-full w-[10%] md:w-[6%]">
      <div
        ref={menuRef}
        className="  absolute left-3 top-4 translate-y-0 md:translate-y-[-100%] transition-transform duration-300"
        onClick={() => handleMenu()}
      >
        <MenuIcon icon={MENUIMG} text={"Menu"} disableEffect={true} />
      </div>
      <SideBar
        SidebarBtn={MenuIcon}
        addStyle={`transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-[-200%]"
        } md:translate-x-0 `}
        sidebarContent={menuContent}
      />
    </menu>
  );
}

export default Menu;
