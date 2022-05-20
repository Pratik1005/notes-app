import {NavMenu, Header} from "../../components";

const Profile = () => {
  return (
    <>
      <Header />
      <section className="app-ctn">
        <NavMenu />
        <div className="notes-ctn">
          <div className="profile-ctn"></div>
        </div>
      </section>
    </>
  );
};
