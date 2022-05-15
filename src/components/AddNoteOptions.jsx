const AddNoteOptions = ({handleAddNote}) => {
  return (
    <>
      <div className="note-option">
        <span className="priority fw-bold">High</span>
        <span
          className="material-icons-outlined icon-hover pd-xs br-full cursor-pointer"
          title="Background options"
        >
          palette
        </span>
        <span
          className="material-icons-outlined icon-hover pd-xs br-full cursor-pointer"
          title="Add label"
        >
          label
        </span>
      </div>
      <div>
        <span
          className="modal-cta-btn cursor-pointer pd-xs br-sm"
          onClick={handleAddNote}
        >
          Add Note
        </span>
      </div>
    </>
  );
};

export {AddNoteOptions};
