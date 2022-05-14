import {NavMenu, Header, NoNotes} from "../../components";

const Trash = () => {
  return (
    <>
      <Header />
      <section className="app-ctn">
        <NavMenu />
        <div className="notes-ctn">
          <div className="all-notes">
            <NoNotes icon="delete" text="No notes in trash" />
          </div>
        </div>
      </section>
    </>
  );
};

export {Trash};
