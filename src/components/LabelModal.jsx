import {useState} from "react";
import {toast} from "react-toastify";
import {useNotes} from "../context";
import {USER_ACTIONS} from "../reducer";
import {LabelInput} from "./index";

const LabelModal = ({toggleLabelModal}) => {
  const {notesState, notesDispatch} = useNotes();
  const [labelText, setLabelText] = useState("");

  const handleAddLabel = () => {
    if (labelText.trim().length > 0) {
      notesDispatch({type: USER_ACTIONS.ADD_NEW_LABEL, payload: labelText});
      setLabelText("");
    } else {
      toast.error("Label should not be empty");
    }
  };
  return (
    <div className="note-modal-overlay">
      <div className="label-modal-content pd-sm br-sm">
        <div className="flex-align-center just-con-sp-bt">
          <h4 className="fw-regular">Edit labels</h4>
          <span
            className="material-icons pd-xs br-sm cursor-pointer icon-hover br-full"
            title="Close"
            onClick={() => toggleLabelModal((prev) => !prev)}
          >
            close
          </span>
        </div>

        <div className="flex-align-center">
          <input
            type="text"
            placeholder="Create new lable"
            className="input-no-border"
            value={labelText}
            onChange={(e) => setLabelText(e.target.value)}
          />
          <span
            className="material-icons-outlined cursor-pointer small-icon-hover br-full"
            title="Create label"
            onClick={handleAddLabel}
          >
            done
          </span>
        </div>
        {notesState.labels.length > 0 && (
          <div className="pd-bottom-lg">
            {notesState.labels.map((item) => (
              <LabelInput key={item.id} labelData={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export {LabelModal};
