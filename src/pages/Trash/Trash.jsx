import {NavMenu, Header} from "../../components";

const Trash = () => {
  return (
    <>
      <Header />
      <section className="app-ctn">
        <NavMenu />
        <div className="notes-ctn">
          <h2>Trash</h2>
        </div>
      </section>
    </>
  );
};

export {Trash};
