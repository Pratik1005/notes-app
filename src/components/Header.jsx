import profilePic from "../assets/profile_pic.jpg";

const Header = () => {
  return (
    <header className="top-header">
      <h1 className="header-logo">MyNotes</h1>
      <div className="theme-profile-ctn">
        <span className="material-icons theme-icon cursor-pointer">
          dark_mode
        </span>
        <div className="avatar-ctn br-full">
          <img src={profilePic} alt="user" className="img-responsive" />
        </div>
      </div>
    </header>
  );
};

export {Header};
