import {useNotes} from "../../context";
import {NavMenu, Header, Note} from "../../components";

const Archive = () => {
  const {notesState} = useNotes();
  return (
    <>
      <Header />
      <section className="app-ctn">
        <NavMenu />
        <div className="notes-ctn">
          <div className="all-notes">
            {notesState.archives.length > 0 ? (
              [...notesState.archives]
                .reverse()
                .map((item) => <Note key={item._id} noteData={item} />)
            ) : (
              <h2>No Archives</h2>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export {Archive};
