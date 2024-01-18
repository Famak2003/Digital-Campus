import MENUICON from "./../asset/icons8-menu-vertical-50.png";
import { useEffect, useRef, useState } from "react";
import MenuButton from "../utilities/MenuButton";

import MenuLinksContent, { menuContent } from "../Data/MenuLinksContent";

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  // console.log(MenuLinksContent);

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

  // console.log(MenuLinksContent);

  return (
    <menu
      ref={menuRef}
      className="md:relative absolute h-[90dvh] mobile:h-full w-[6rem]"
    >
      <div
        className=" absolute left-0 w-full h-[5rem] flex justify-center items-center top-4 translate-y-0 md:translate-y-[-100%] transition-transform duration-300"
        onClick={() => handleMenu()}
      >
        <MenuButton icon={MENUICON} title={"Menu"} linkContent={menuContent} />
      </div>

      {/* sidebar */}
      <div
        className={` items-center justify-between py-14 m-0 flex gap-[8%] h-full flex-col bg-[var(--white)] rounded-r-3xl text-white w-full shadow-lg transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-[-100%]"
        } md:translate-x-0`}
      >
        {MenuLinksContent.map((obj, idx) => {
          return (
            <MenuButton
              icon={obj.icon}
              title={obj.title}
              key={idx}
              linkContent={obj.linkContent}
            />
          );
        })}
      </div>
    </menu>
  );
}

export default Menu;
