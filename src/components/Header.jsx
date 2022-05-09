import profilePic from "../assets/profile_pic.jpg";

const Header = () => {
  return (
    <header className="top-header">
      <h1 className="header-logo">MyNotes</h1>
      <div className="search-bar br-sm">
        <span className="material-icons search-icon">search</span>
        <input type="text" className="search-input" />
      </div>
      <div className="theme-profile-ctn">
        <span className="material-icons theme-icon">dark_mode</span>
        <div className="avatar-ctn br-full">
          <img src={profilePic} alt="user" className="img-responsive" />
        </div>
      </div>
    </header>
  );
};

export {Header};
