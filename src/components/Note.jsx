import {useState} from "react";
import {NoteModal} from "./index";

const Note = ({noteData}) => {
  const {_id, noteTitle, noteText, date} = noteData;
  const [isEditNote, setIsEditNote] = useState(false);
  return (
    <div className="note pd-sm">
      <span className="material-icons-outlined pin-icon icon-hover pd-xs br-full cursor-pointer">
        push_pin
      </span>
      <h4 className="pd-bottom-md">{noteTitle}</h4>
      <p>{noteText}</p>
      <div className="labels-ctn">
        <label className="label-chip br-full">Test</label>
        <label className="label-chip br-full">Core concept</label>
      </div>
      <div className="note-option-ctn">
        <span className="note-date">{date}</span>
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
          <span
            className="material-icons-outlined icon-hover pd-xs br-full cursor-pointer"
            onClick={() => setIsEditNote((prev) => !prev)}
          >
            edit
          </span>
          <span className="material-icons-outlined icon-hover pd-xs br-full cursor-pointer">
            delete
          </span>
          {isEditNote && (
            <NoteModal setIsModalOpen={setIsEditNote} noteData={noteData} />
          )}
        </div>
      </div>
    </div>
  );
};

export {Note};
