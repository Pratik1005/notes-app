import {PaletteIcon} from "./index";

const AddNoteOptions = ({handleAddNote, setNoteBackground}) => {
  return (
    <>
      <div className="note-option">
        <span className="priority fw-bold">High</span>
        <PaletteIcon setNoteBackground={setNoteBackground} />
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
