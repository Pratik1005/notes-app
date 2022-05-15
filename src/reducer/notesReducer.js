import {USER_ACTIONS} from "./constant";

const notesReducer = (state, action) => {
  switch (action.type) {
    case USER_ACTIONS.INITIAL_NOTES:
    case USER_ACTIONS.ADD_NEW_NOTE:
    case USER_ACTIONS.EDIT_NOTE:
      return {...state, notes: action.payload};
    case USER_ACTIONS.ADD_TO_ARCHIVE:
    case USER_ACTIONS.RESTORE_FROM_ARCHIVE:
      return {
        ...state,
        notes: action.payload.notes,
        archives: action.payload.archives,
      };
    case USER_ACTIONS.ADD_TO_TRASH:
    case USER_ACTIONS.RESTORE_FROM_TRASH:
      return {
        ...state,
        notes: action.payload.notes,
        trash: action.payload.trash,
      };
    case USER_ACTIONS.DELETE_FROM_TRASH:
      return {...state, trash: action.payload};
    default:
      return state;
  }
};

export {notesReducer};
