import {USER_ACTIONS} from "./constant";

const notesReducer = (state, action) => {
  switch (action.type) {
    case USER_ACTIONS.INITIAL_NOTES:
    case USER_ACTIONS.ADD_NEW_NOTE:
      return {...state, notes: action.payload};
    default:
      return state;
  }
};

export {notesReducer};
