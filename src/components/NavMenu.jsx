import {useState} from "react";
import {NavLink} from "react-router-dom";
import {Footer, NoteModal, LabelModal} from "./index";

const NavMenu = () => {
  const [isAddNote, setIsAddNote] = useState(false);
  const [isEditLabel, setIsEditLabel] = useState(false);

  const getActiveStyle = ({isActive}) =>
    isActive ? {backgroundColor: "var(--menu-hover)"} : null;
  return (
    <aside className="side-menu">
      <nav className="menu-ctn">
        <NavLink to="/notes" style={getActiveStyle} className="menu-link">
          <span className="material-icons menu-icon">home</span> Notes
        </NavLink>
        <div
          className="menu-link cursor-pointer"
          onClick={() => setIsEditLabel((prev) => !prev)}
        >
          <span className="material-icons menu-icon">edit</span> Edit labels
        </div>
        <NavLink to="/archive" style={getActiveStyle} className="menu-link">
          <span className="material-icons menu-icon">archive</span> Archive
        </NavLink>
        <NavLink to="/trash" style={getActiveStyle} className="menu-link">
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
        {isEditLabel && <LabelModal toggleLabelModal={setIsEditLabel} />}
      </nav>
      <Footer />
    </aside>
  );
};

export {NavMenu};
