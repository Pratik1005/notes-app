import {useState} from "react";
import {toast} from "react-toastify";
import {addNote} from "../services";
import {useAuth, useNotes} from "../context";

const NoteModal = ({setIsAddNote}) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const {auth} = useAuth();
  const {notesState, notesDispatch} = useNotes();

  const handleAddNote = () => {
    if (noteTitle.trim().length > 0 && noteText.trim().length > 0) {
      addNote(
        auth.token,
        {noteTitle, noteText, date: new Date()},
        notesDispatch
      );
      setIsAddNote((prev) => !prev);
    } else {
      toast.error("Title or text should not be empty");
    }
  };

  return (
    <div
      className="note-modal-overlay"
      onClick={() => setIsAddNote((prev) => !prev)}
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
              onClick={handleAddNote}
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
