const NoNotes = ({icon, text}) => {
  return (
    <div className="empty-note-ctn">
      <span className="material-icons-outlined empty-note-icon">{icon}</span>
      <h4 className="empty-note-text">{text}</h4>
    </div>
  );
};

export {NoNotes};
