import {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import {useAuth, useNotes} from "../context";
import {editNote} from "../services";
import {dateOnNote} from "../utils";
import {
  NoteModal,
  ArchiveIcon,
  UnarchiveIcon,
  DeleteIcon,
  LabelIcon,
} from "./index";

const Note = ({noteData}) => {
  const {
    _id,
    noteTitle,
    noteText,
    date,
    labels,
    noteBgColor,
    notePriority,
    isPinned,
  } = noteData;
  const location = useLocation();
  const [isEditNote, setIsEditNote] = useState(false);
  const [currentPriority, setCurrentPriority] = useState(() => notePriority);
  const {auth} = useAuth();
  const {notesDispatch} = useNotes();

  useEffect(() => {
    setCurrentPriority(() => notePriority);
  }, [notePriority]);

  const handlePinNote = () => {
    editNote(
      auth.token,
      _id,
      {...noteData, isPinned: !isPinned},
      notesDispatch
    );
  };
  return (
    <div className={`note pd-sm ${noteBgColor}`}>
      <span
        className={`material-icons${
          isPinned ? "" : "-outlined"
        } pin-icon icon-hover pd-xs br-full cursor-pointer`}
        onClick={location.pathname === "/notes" ? handlePinNote : () => {}}
      >
        push_pin
      </span>
      <h4 className="pd-bottom-md">{noteTitle}</h4>
      <p>{noteText}</p>
      <div className="labels-ctn">
        {labels.map((item, index) => (
          <label className="label-chip br-full" key={index}>
            {item}
          </label>
        ))}
      </div>
      <div className="note-option-ctn">
        <span className="note-date">{dateOnNote(date)}</span>
        <div className="note-option">
          <span className="priority fw-bold">{currentPriority}</span>
          {location.pathname === "/archive" ? (
            ""
          ) : (
            <LabelIcon noteData={noteData} styleData={{right: "0px"}} />
          )}
          {location.pathname === "/archive" ? (
            <UnarchiveIcon noteId={_id} />
          ) : (
            <ArchiveIcon noteId={_id} noteData={noteData} />
          )}
          {location.pathname === "/archive" ? (
            ""
          ) : (
            <span
              className="material-icons-outlined icon-hover pd-xs br-full cursor-pointer"
              title="Edit note"
              onClick={() => setIsEditNote((prev) => !prev)}
            >
              edit
            </span>
          )}
          {location.pathname === "/archive" ? "" : <DeleteIcon noteId={_id} />}
          {isEditNote && (
            <NoteModal
              setIsModalOpen={setIsEditNote}
              noteData={noteData}
              currentPriority={currentPriority}
              setCurrentPriority={setCurrentPriority}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export {Note};
