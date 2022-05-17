import {useLocation} from "react-router-dom";
import {ArchiveIcon, UnarchiveIcon, DeleteIcon, LabelIcon} from "./index";

const EditNoteOptions = ({handleEditNote, noteData}) => {
  const location = useLocation();
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
