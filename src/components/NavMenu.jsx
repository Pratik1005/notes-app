import {useState} from "react";
import {NavLink} from "react-router-dom";
import {useNotes, useMobileMenu} from "../context";
import {Footer, NoteModal, LabelModal} from "./index";

const NavMenu = () => {
  const [isAddNote, setIsAddNote] = useState(false);
  const [isEditLabel, setIsEditLabel] = useState(false);
  const {notesState} = useNotes();
  const {mobileMenuToggle, setMobileMenuToggle} = useMobileMenu();

  const getActiveStyle = ({isActive}) =>
    isActive ? {backgroundColor: "var(--menu-hover)"} : null;
  return (
    <>
      <aside className={`side-menu ${mobileMenuToggle ? "show-menu" : ""}`}>
        <nav className="menu-ctn">
          <div className="flex-align-center mobile-logo-close">
            <h1 className="header-logo">MyNotes</h1>
            <span
              className="material-icons mobile-menu-icon cursor-pointer"
              onClick={() => setMobileMenuToggle((prev) => !prev)}
            >
              close
            </span>
          </div>
          <div
            className="nav-links"
            onClick={() => setMobileMenuToggle((prev) => !prev)}
          >
            <NavLink to="/notes" style={getActiveStyle} className="menu-link">
              <span className="material-icons menu-icon">home</span> Notes
            </NavLink>
            {notesState.labels.map((item) => (
              <NavLink
                to={`/label/${item.label}`}
                style={getActiveStyle}
                className="menu-link"
                key={item.id}
              >
                <span className="material-icons menu-icon">label</span>{" "}
                {item.label}
              </NavLink>
            ))}
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
              className="btn btn-icon-text mg-sm add-note-cta"
              onClick={() => setIsAddNote((prev) => !prev)}
            >
              <span className="material-icons">add</span>Add Note
            </button>
            {isAddNote && (
              <NoteModal setIsModalOpen={setIsAddNote} isAddNote={isAddNote} />
            )}
            {/* {isEditLabel && <LabelModal toggleLabelModal={setIsEditLabel} />} */}
          </div>
        </nav>
        <Footer />
      </aside>
      {isEditLabel && <LabelModal toggleLabelModal={setIsEditLabel} />}
    </>
  );
};

export {NavMenu};
