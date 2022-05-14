import {useAuth, useNotes} from "../../context";
import {addToArchive} from "../../services";

const ArchiveIcon = ({noteId, noteData}) => {
  const {auth} = useAuth();
  const {notesDispatch} = useNotes();
  const handleArchiveNote = () => {
    addToArchive(auth.token, noteId, noteData, notesDispatch);
  };
  return (
    <span
      className="material-icons-outlined icon-hover pd-xs br-full cursor-pointer"
      onClick={handleArchiveNote}
    >
      archive
    </span>
  );
};

export {ArchiveIcon};
