import Logo from "../assets/logo.svg";
import Moon from "../assets/icon-moon.svg";
import Avatar from "../assets/image-avatar.jpg";

function Header() {
  return (
    <div className="header-container flex flex-col justify-between bg-[#373B53] h-full">
      <a href="/">
        <div className="header-logo flex justify-center items-center w-[103px] h-[103px] bg-[#7C5DFA] relative">
          <img src={Logo} alt="Site logo" className="flex z-10" />
          <span className="header-logo-bg flex absolute bottom-0 "></span>
        </div>
      </a>
      <div className="avatar-container">
        <span className="moon-container pb-8">
          <a className="moon-link" href="/">
            <img className="flex" src={Moon} alt="Moon img" />
          </a>
        </span>
        <hr />
        <span className="p-6">
          <a href="/">
            <img className="avatar" src={Avatar} alt="Avatar" />
          </a>
        </span>
      </div>
    </div>
  );
}

export default Header;
