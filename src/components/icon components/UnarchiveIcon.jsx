import {useAuth, useNotes} from "../../context";
import {restoreFromArchive} from "../../services";

const UnarchiveIcon = ({noteId}) => {
  const {auth} = useAuth();
  const {notesDispatch} = useNotes();

  const handleUnarchiveNote = () => {
    restoreFromArchive(auth.token, noteId, notesDispatch);
  };
  return (
    <span
      className="material-icons-outlined icon-hover pd-xs br-full cursor-pointer"
      onClick={handleUnarchiveNote}
    >
      unarchive
    </span>
  );
};

export {UnarchiveIcon};
