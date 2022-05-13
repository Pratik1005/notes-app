import {useState} from "react";
import {NavLink} from "react-router-dom";
import {Footer, NoteModal} from "./index";
const NavMenu = () => {
  const [isAddNote, setIsAddNote] = useState(false);
  return (
    <aside className="side-menu">
      <nav className="menu-ctn">
        <NavLink to="/notes" className="menu-link">
          <span className="material-icons menu-icon">home</span> Notes
        </NavLink>
        <NavLink to="/notes" className="menu-link">
          <span className="material-icons menu-icon">edit</span> Edit labels
        </NavLink>
        <NavLink to="/archive" className="menu-link">
          <span className="material-icons menu-icon">archive</span> Archive
        </NavLink>
        <NavLink to="/trash" className="menu-link">
          <span className="material-icons menu-icon">delete</span> Trash
        </NavLink>
        <button
          className="btn btn-icon-text mg-sm"
          onClick={() => setIsAddNote((prev) => !prev)}
        >
          <span className="material-icons">add</span>Add Note
        </button>
        {isAddNote && (
          <NoteModal setIsModalOpen={setIsAddNote} isAddNote={isAddNote} />
        )}
      </nav>
      <Footer />
    </aside>
  );
};

export {NavMenu};
