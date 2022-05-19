import "./Notes.css";
import {NavMenu, Header, Note, NoNotes, FilterIcon} from "../../components";
import {useNotes} from "../../context";

const Notes = () => {
  const {notesState} = useNotes();
  return (
    <>
      <Header />
      <section className="app-ctn">
        <NavMenu />
        <div className="notes-ctn">
          <div className="search-bar">
            <span className="material-icons search-icon">search</span>
            <input type="text" className="search-input" placeholder="Search" />
            <FilterIcon />
          </div>
          <div className="all-notes">
            {notesState.notes.length > 0 ? (
              [...notesState.notes]
                .reverse()
                .map((item) => <Note key={item._id} noteData={item} />)
            ) : (
              <NoNotes icon="description" text="Notes you add apper here" />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export {Notes};
