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
            {/* <div className="note pd-sm">
              <span className="material-icons-outlined unpin-icon icon-hover pd-xs br-full cursor-pointer">
                push_pin
              </span>
              <h4 className="pd-bottom-md">Note Title</h4>
              <p>Note text texttexttexttexttexttexttexttext</p>
              <div className="labels-ctn">
                <span className="label">
                  <label className="label-chip br-full">Test</label>
                </span>
                <span className="label">
                  <label className="label-chip br-full">Core concept</label>
                </span>
              </div>
              <div className="note-option-ctn">
                <span className="note-date">10 May 2022</span>
                <div className="note-option">
                  <span className="priority fw-bold">High</span>
                  <span className="material-icons-outlined icon-hover pd-xs br-full cursor-pointer">
                    palette
                  </span>
                  <span className="material-icons-outlined icon-hover pd-xs br-full cursor-pointer">
                    label
                  </span>
                  <span className="material-icons-outlined icon-hover pd-xs br-full cursor-pointer">
                    archive
                  </span>
                  <span className="material-icons-outlined icon-hover pd-xs br-full cursor-pointer">
                    edit
                  </span>
                  <span className="material-icons-outlined icon-hover pd-xs br-full cursor-pointer">
                    delete
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export {Notes};
