import {NavLink} from "react-router-dom";
import {Footer} from "./index";
const NavMenu = () => {
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
        <button className="btn btn-icon-text mg-sm">
          <span className="material-icons">add</span>Add Note
        </button>
      </nav>
      <Footer />
    </aside>
  );
};

export {NavMenu};
