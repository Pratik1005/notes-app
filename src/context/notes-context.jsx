import {createContext, useContext, useReducer} from "react";
import {notesReducer} from "../reducer";

const NotesContext = createContext();

const initialValue = {
  notes: [],
  archives: [],
  trash: [],
};

const NotesProvider = ({children}) => {
  const [notesState, notesDispatch] = useReducer(notesReducer, initialValue);
  return (
    <NotesContext.Provider value={{notesState, notesDispatch}}>
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export {NotesProvider, useNotes};
