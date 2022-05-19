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
  if (sortBy === "newest") {
    return [...notes].sort((note1, note2) => note2.date - note1.date);
  }
  if (sortBy === "oldest") {
    return [...notes].sort((note1, note2) => note1.date - note2.date);
  }
  return notes;
};

export {getNotesByPriority, getNotesByLabel, getNotesByDate};
