import {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import {useNotes} from "../context";
import {dateOnNote} from "../utils";
import {USER_ACTIONS} from "../reducer";
import {
  NoteModal,
  ArchiveIcon,
  UnarchiveIcon,
  DeleteIcon,
  LabelIcon,
  PaletteIcon,
} from "./index";

const Note = ({noteData}) => {
  const {_id, noteTitle, noteText, date, labels, noteBgColor} = noteData;
  const location = useLocation();
  const {notesDispatch} = useNotes();
  const [isEditNote, setIsEditNote] = useState(false);
  const [noteBackground, setNoteBackground] = useState(noteBgColor);
  console.log("note", noteBackground, noteBgColor);
  // useEffect(() => {
  //   notesDispatch({
  //     type: USER_ACTIONS.CHANGE_NOTE_COLOR,
  //     payload: {id: noteData._id, newColor: noteBackground},
  //   });
  // }, [noteBackground]);

  return (
    <div className={`note pd-sm ${noteBgColor}`}>
      <span className="material-icons-outlined pin-icon icon-hover pd-xs br-full cursor-pointer">
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
          <span className="priority fw-bold">High</span>
          <PaletteIcon
            setNoteBackground={setNoteBackground}
            noteId={noteData._id}
          />
          <LabelIcon noteData={noteData} styleData={{right: "-20px"}} />
          {location.pathname === "/archive" ? (
            <UnarchiveIcon noteId={_id} />
          ) : (
            <ArchiveIcon noteId={_id} noteData={noteData} />
          )}
          <span
            className="material-icons-outlined icon-hover pd-xs br-full cursor-pointer"
            title="Edit note"
            onClick={() => setIsEditNote((prev) => !prev)}
          >
            edit
          </span>
          <DeleteIcon noteId={_id} />
          {isEditNote && (
            <NoteModal setIsModalOpen={setIsEditNote} noteData={noteData} />
          )}
        </div>
      </div>
    </div>
  );
};

export {Note};
