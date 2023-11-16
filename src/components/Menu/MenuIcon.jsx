function MenuIcon({ icon, text }) {
  return (
    <div className="sidebar-icon group ">
      <img src={icon} alt="img" />
      <span className="sidebar-tooltip group-hover:scale-100 ">{text}</span>
    </div>
  );
}

export default MenuIcon;
