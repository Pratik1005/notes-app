import {useState} from "react";
import {addNote, editNote} from "../services";
import {useAuth, useNotes} from "../context";
import {isNoteEmpty} from "../utils";
import {AddNoteOptions, EditNoteOptions} from "./index";

const NoteModal = ({setIsModalOpen, noteData, isAddNote}) => {
  const [noteTitle, setNoteTitle] = useState(
    noteData?.noteTitle ? noteData.noteTitle : ""
  );
  const [noteText, setNoteText] = useState(
    noteData?.noteText ? noteData.noteText : ""
  );
  const {auth} = useAuth();
  const {notesState, notesDispatch} = useNotes();

  const handleAddNote = () => {
    if (!isNoteEmpty(noteTitle, noteText)) {
      addNote(
        auth.token,
        {noteTitle, noteText, date: new Date().toString()},
        notesDispatch
      );
      setIsModalOpen((prev) => !prev);
    }
  };

  const handleEditNote = () => {
    if (!isNoteEmpty(noteTitle, noteText)) {
      editNote(
        auth.token,
        noteData._id,
        {noteTitle, noteText, date: new Date().toString},
        notesDispatch
      );
      setIsModalOpen((prev) => !prev);
    }
  };

  return (
    <div
      className="note-modal-overlay"
      onClick={() => setIsModalOpen((prev) => !prev)}
    >
      <div className="modal-content pd-sm" onClick={(e) => e.stopPropagation()}>
        <div className="input-title-ctn">
          <input
            type="text"
            placeholder="Title"
            className="input-field"
            autoFocus
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
          <span className="material-icons-outlined br-full icon-hover cursor-pointer">
            push_pin
          </span>
        </div>
        <textarea
          className="note-textarea"
          placeholder="Take a note..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <div className="note-option-ctn">
          {isAddNote ? (
            <AddNoteOptions handleAddNote={handleAddNote} />
          ) : (
            <EditNoteOptions handleEditNote={handleEditNote} />
          )}
        </div>
      </div>
    </div>
  );
};

export {NoteModal};
