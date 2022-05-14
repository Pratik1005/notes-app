import {USER_ACTIONS} from "./constant";

const notesReducer = (state, action) => {
  switch (action.type) {
    case USER_ACTIONS.INITIAL_NOTES:
    case USER_ACTIONS.ADD_NEW_NOTE:
    case USER_ACTIONS.EDIT_NOTE:
      return {...state, notes: action.payload};
    // case USER_ACTIONS.ADD_TO_TRASH:
    //   return {...state, trash: [...state.trash, action.payload]};
    case USER_ACTIONS.ADD_TO_ARCHIVE:
      return {
        ...state,
        notes: action.payload.notes,
        archives: action.payload.archives,
      };
    default:
      return state;
  }
};

export {notesReducer};
