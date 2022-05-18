import {useLocation} from "react-router-dom";
import {
  ArchiveIcon,
  UnarchiveIcon,
  DeleteIcon,
  LabelIcon,
  PaletteIcon,
} from "./index";

const EditNoteOptions = ({handleEditNote, noteData, setNoteBackground}) => {
  const location = useLocation();
  return (
    <>
      <div className="note-option">
        <span className="priority fw-bold">High</span>
        <PaletteIcon
          noteId={noteData._id}
          setNoteBackground={setNoteBackground}
        />
        <LabelIcon noteData={noteData} styleData={{left: "10.3rem"}} />
        {location.pathname === "/archive" ? (
          <UnarchiveIcon noteId={noteData._id} />
        ) : (
          <ArchiveIcon noteId={noteData._id} noteData={noteData} />
        )}
        <DeleteIcon noteId={noteData._id} />
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
