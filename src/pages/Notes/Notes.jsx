import {NavMenu, Header} from "../../components";

const Notes = () => {
  return (
    <>
      <Header />
      <section className="app-ctn">
        <NavMenu />
        <div className="notes-ctn">
          <h2>All notes</h2>
        </div>
      </section>
    </>
  );
};

export {Notes};
