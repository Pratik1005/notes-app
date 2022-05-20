import "./Notes.css";
import {useState} from "react";
import {getNotesByPriority, getNotesByDate, getSearchNotes} from "../../utils";
import {NavMenu, Header, Note, NoNotes, FilterIcon} from "../../components";
import {useNotes} from "../../context";

const showPinnedNotes = (pinnedNotes, unPinnedNotes) => {
  return (
    <>
      <h3>Pinned</h3>
      {pinnedNotes.map((item) => (
        <Note key={item._id} noteData={item} />
      ))}
      {unPinnedNotes.length > 0 && <h3>Others</h3>}
    </>
  );
};

const Notes = () => {
  const [filterData, setFilterData] = useState({
    currentPriority: "",
    sortBy: "",
  });
  const [searchInput, setSearchInput] = useState("");
  const {notesState} = useNotes();

  const searchNotes = getSearchNotes(notesState.notes, searchInput);
  const priorityNotes = getNotesByPriority(
    searchNotes,
    filterData.currentPriority
  );
  const sortedNotes = getNotesByDate(priorityNotes, filterData.sortBy);
  const pinnedNotes = sortedNotes.filter((item) => item.isPinned);
  const unPinnedNotes = sortedNotes.filter((item) => !item.isPinned);

  return (
    <>
      <Header />
      <section className="app-ctn">
        <NavMenu />
        <div className="notes-ctn">
          <div className="search-bar">
            <span className="material-icons search-icon">search</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <FilterIcon filterData={filterData} setFilterData={setFilterData} />
          </div>
          <div className="all-notes">
            {pinnedNotes.length
              ? showPinnedNotes(pinnedNotes, unPinnedNotes)
              : ""}
            {unPinnedNotes.length
              ? unPinnedNotes.map((item) => (
                  <Note key={item._id} noteData={item} />
                ))
              : ""}
            {pinnedNotes.length === 0 && unPinnedNotes.length === 0 ? (
              <NoNotes icon="description" text="Notes you add apper here" />
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export {Notes};
