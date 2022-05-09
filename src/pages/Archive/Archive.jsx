import {NavMenu, Header} from "../../components";

const Archive = () => {
  return (
    <>
      <Header />
      <section className="app-ctn">
        <NavMenu />
        <div className="notes-ctn">
          <h2>Archive</h2>
        </div>
      </section>
    </>
  );
};

export {Archive};
