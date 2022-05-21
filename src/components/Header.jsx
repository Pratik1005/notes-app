import {Link} from "react-router-dom";
import {useEffect} from "react";
import profilePic from "../assets/profile_pic.jpg";
import {useTheme, useMobileMenu} from "../context";

const Header = () => {
  const {theme, setTheme} = useTheme();
  const {setMobileMenuToggle} = useMobileMenu();

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "light-theme" ? "dark-theme" : "light-theme");
  };
  return (
    <header className="top-header">
      <div className="flex-align-center">
        <span
          className="material-icons mobile-menu-icon cursor-pointer"
          onClick={() => setMobileMenuToggle((prev) => !prev)}
        >
          menu
        </span>
        <h1 className="header-logo">MyNotes</h1>
      </div>
      <div className="theme-profile-ctn">
        <span
          className="material-icons theme-icon cursor-pointer"
          title="Change theme"
          onClick={handleTheme}
        >
          {theme === "light-theme" ? "dark_mode" : "light_mode"}
        </span>
        <div className="avatar-ctn br-full cursor-pointer">
          <Link to="/profile">
            <img src={profilePic} alt="user" className="img-responsive" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export {Header};
