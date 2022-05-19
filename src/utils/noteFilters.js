const getNotesByPriority = (notes, priority) => {
  if (priority) {
    return notes.filter((item) => item.notePriority === priority);
  }
  return notes;
};

const getNotesByLabel = (notes, label) => {
  if (label) {
    return notes.filter((item) => item.labels.includes(label));
  }
  return notes;
};

const getNotesByDate = (notes, sortBy) => {
  if (sortBy === "Newest") {
    return [...notes].sort(
      (note1, note2) =>
        new Date(note2.date.toString()) - new Date(note1.date.toString())
    );
  }
  if (sortBy === "Oldest") {
    return [...notes].sort(
      (note1, note2) =>
        new Date(note1.date.toString()) - new Date(note2.date.toString())
    );
  }
  return notes;
};

export {getNotesByPriority, getNotesByLabel, getNotesByDate};
