const NoteModal = ({setIsAddNote}) => {
  return (
    <div
      className="note-modal-overlay"
      onClick={() => setIsAddNote((prev) => !prev)}
    >
      <div className="modal-content pd-sm" onClick={(e) => e.stopPropagation()}>
        <div className="input-title-ctn">
          <input type="text" placeholder="Title" className="input-field" />
          <span className="material-icons-outlined br-full icon-hover cursor-pointer">
            push_pin
          </span>
        </div>
        <textarea className="note-textarea" placeholder="Take a note..." />
        <div className="note-option-ctn">
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
              delete
            </span>
          </div>
          <div>
            <span
              className="modal-cta-btn cursor-pointer pd-xs br-sm"
              onClick={() => setIsAddNote((prev) => !prev)}
            >
              Save
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export {NoteModal};
