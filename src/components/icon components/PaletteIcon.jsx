import {useState} from "react";
import {useNotes} from "../../context";
import {USER_ACTIONS} from "../../reducer";

const PaletteIcon = ({noteId, setNoteBackground, styleData}) => {
  const [isAddColor, setIsAddColor] = useState(false);
  const {notesDispatch} = useNotes();

  const handleBackgroundColor = (bgColor) => {
    if (setNoteBackground) {
      setNoteBackground(bgColor);
    }
    notesDispatch({
      type: USER_ACTIONS.CHANGE_NOTE_COLOR,
      payload: {id: noteId, newColor: bgColor},
    });
  };
  return (
    <>
      <span
        className="material-icons-outlined icon-hover pd-xs br-full cursor-pointer"
        title="Background options"
        onClick={() => setIsAddColor((prev) => !prev)}
      >
        palette
      </span>
      {isAddColor && (
        <div
          className="color-palette flex-align-center pd-sm br-md"
          style={styleData}
        >
          <span
            className="material-icons-outlined default-color br-full cursor-pointer"
            title="Default"
            onClick={() => handleBackgroundColor("")}
          >
            format_color_reset
          </span>
          <span
            className="color-ring color-ring-red br-full cursor-pointer"
            title="Red"
            onClick={() => handleBackgroundColor("color-ring-red")}
          ></span>
          <span
            className="color-ring color-ring-orange br-full cursor-pointer"
            title="Orange"
            onClick={() => handleBackgroundColor("color-ring-orange")}
          ></span>
          <span
            className="color-ring color-ring-yellow br-full cursor-pointer"
            title="Yellow"
            onClick={() => handleBackgroundColor("color-ring-yellow")}
          ></span>
          <span
            className="color-ring color-ring-blue br-full cursor-pointer"
            title="Blue"
            onClick={() => handleBackgroundColor("color-ring-blue")}
          ></span>
        </div>
      )}
    </>
  );
};

export {PaletteIcon};
