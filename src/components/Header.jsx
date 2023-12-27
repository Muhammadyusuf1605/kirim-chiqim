import Logo from "../assets/logo.svg";
import Moon from "../assets/icon-moon.svg";
import Sun from "../assets/icon-sun.svg";
import Avatar from "../assets/image-avatar.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [mode, setMode] = useState(true);
  const toggleMode = () => {
    setMode(!mode);
    console.log(1);
  };
  return (
    <div className="header-container flex flex-col justify-between bg-[#373B53] h-full">
      <Link to="/">
        <div className="header-logo flex justify-center items-center w-[103px] h-[103px] bg-[#7C5DFA] relative">
          <img src={Logo} alt="Site logo" className="flex z-10" />
          <span className="header-logo-bg flex absolute bottom-0 "></span>
        </div>
      </Link>
      <div className="avatar-container">
        <span className="moon-container pb-8 transition-[0.3s]">
          {mode ? (
            <>
              <div onClick={() => toggleMode()}>
                <img className="flex" src={Moon} alt="Moon img" />
              </div>
            </>
          ) : (
            <>
              <div onClick={() => toggleMode()}>
                <img className="flex" src={Sun} alt="Sun img" />
              </div>
            </>
          )}
        </span>
        <hr />
        <span className="p-6">
          <Link to="/">
            <img className="avatar" src={Avatar} alt="Avatar" />
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Header;
