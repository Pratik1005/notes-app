import "./Notes.css";
import {NavMenu, Header, Note} from "../../components";

const Notes = () => {
  return (
    <>
      <Header />
      <section className="app-ctn">
        <NavMenu />
        <div className="notes-ctn">
          <div className="search-bar">
            <span className="material-icons search-icon">search</span>
            <input type="text" className="search-input" placeholder="Search" />
            <span className="material-icons filter-icon icon-hover pd-xs br-full cursor-pointer">
              tune
            </span>
          </div>
          <div className="all-notes">
            <Note />
            <Note />
          </div>
        </div>
      </section>
    </>
  );
};

export {Notes};
