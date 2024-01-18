import Modal from "./Modal";

function MenuButton({ icon, title, linkContent, isMenuOpen }) {
  return (
    <button className=" w-full h-[7rem] group active:bg-transparent focus:outline-none ">
      <div className="sidebar-icon">
        <img className=" scale-75" src={icon} alt="img" />
        <span className={`sidebar-tooltip z-10 lmobile:group-hover:scale-100 `}>
          {title}
        </span>
        <div className="scale-0 md:scale-100 md:hidden md:group-hover:block group-hover:scale-100 fixed top-0 left-[100%] ease-linear duration-300 transition-all">
          <Modal content={linkContent}></Modal>
        </div>
      </div>
    </button>
  );
}

export default MenuButton;
