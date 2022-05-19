import {useAuth, useNotes} from "../context";
import {restoreFromTrash, deleteFromTrash} from "../services";
import {dateOnNote} from "../utils";

const TrashedNote = ({noteData}) => {
  const {_id, noteTitle, noteText, date, labels, noteBgColor} = noteData;
  const {auth} = useAuth();
  const {notesDispatch} = useNotes();

  const handleRestoreNote = () => {
    restoreFromTrash(auth.token, _id, notesDispatch);
  };

  const handleDeleteNote = () => {
    deleteFromTrash(auth.token, _id, notesDispatch);
  };
  return (
    <div className={`note pd-sm ${noteBgColor}`}>
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
          <span
            className="material-icons-outlined icon-hover pd-xs br-full cursor-pointer"
            title="Delete forever"
            onClick={handleDeleteNote}
          >
            delete_forever
          </span>
          <span
            className="material-icons-outlined icon-hover pd-xs br-full cursor-pointer"
            title="Restore"
            onClick={handleRestoreNote}
          >
            restore_from_trash
          </span>
        </div>
      </div>
    </div>
  );
};

export {TrashedNote};
