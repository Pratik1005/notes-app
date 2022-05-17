import {useState} from "react";

const PaletteIcon = () => {
  const [isAddColor, setIsAddColor] = useState(false);
  const handleBackgroundColor = (bgColor) => {};
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
        <div className="color-palette flex-align-center pd-sm br-md">
          <span className="material-icons-outlined default-color br-full cursor-pointer">
            format_color_reset
          </span>
          <span
            className="color-ring color-ring-red br-full cursor-pointer"
            title="Red"
          ></span>
          <span
            className="color-ring color-ring-orange br-full cursor-pointer"
            title="Orange"
          ></span>
          <span
            className="color-ring color-ring-yellow br-full cursor-pointer"
            title="Yellow"
          ></span>
          <span
            className="color-ring color-ring-blue br-full cursor-pointer"
            title="Blue"
          ></span>
        </div>
      )}
    </>
  );
};

export {PaletteIcon};
