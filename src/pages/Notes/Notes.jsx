import "./Notes.css";
import {useState} from "react";
import {getNotesByPriority, getNotesByLabel, getNotesByDate} from "../../utils";
import {NavMenu, Header, Note, NoNotes, FilterIcon} from "../../components";
import {useNotes} from "../../context";

const Notes = () => {
  const [filterData, setFilterData] = useState({
    currentPriority: "",
    currentLabel: "",
    sortBy: "",
  });
  const {notesState} = useNotes();

  const priorityNotes = getNotesByPriority(
    notesState.notes,
    filterData.currentPriority
  );
  console.log("priority notes", priorityNotes);
  const labelNotes = getNotesByLabel(priorityNotes, filterData.currentLabel);
  console.log("label notes", labelNotes);
  const sortedNotes = getNotesByDate(labelNotes, filterData.sortBy);
  console.log("sorted notes", sortedNotes);
  return (
    <>
      <Header />
      <section className="app-ctn">
        <NavMenu />
        <div className="notes-ctn">
          <div className="search-bar">
            <span className="material-icons search-icon">search</span>
            <input type="text" className="search-input" placeholder="Search" />
            <FilterIcon filterData={filterData} setFilterData={setFilterData} />
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
