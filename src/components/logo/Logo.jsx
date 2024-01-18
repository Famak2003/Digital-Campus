import LOGO from "./../../asset/Near_East_University-logo.svg";
import "./Logo.css";

function Logo() {
  return (
    <div className="spin-image w-[5rem] h-[5rem] right-5 mobile:right-[9rem] z-[999] top-4 fixed">
      <img src={LOGO} alt="near east logo" />
    </div>
  );
}

export default Logo;
