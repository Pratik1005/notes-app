const EditNoteOptions = ({handleEditNote}) => {
  return (
    <>
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
          onClick={handleEditNote}
        >
          Save
        </span>
      </div>
    </>
  );
};

export {EditNoteOptions};
