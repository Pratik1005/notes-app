import axios from "axios";
import {toast} from "react-toastify";

const addToTrash = async (token, noteId, notesDispatch) => {
  try {
    const response = await axios.post(`/notes/trash/${noteId}`, {
      headers: {authorization: token},
    });
    console.log(response);
    toast.success("Added to trash");
  } catch (err) {
    console.error("add to trash", err);
    toast.error("Error adding to trash");
  }
};

export {addToTrash};
