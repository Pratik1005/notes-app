const Note = () => {
  return (
    <div className="note pd-sm">
      <span className="material-icons-outlined pin-icon icon-hover pd-xs br-full cursor-pointer">
        push_pin
      </span>
      <h4 className="pd-bottom-md">Note Title</h4>
      <p>
        Note text area Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laudantium, consequuntur quaerat at delectus veniam accusantium
        molestiae rerum iste, provident, culpa sit. Labore quaerat cumque error
        quas autem modi, vitae explicabo!
      </p>
      <div className="labels-ctn">
        <label className="label-chip br-full">Test</label>
        <label className="label-chip br-full">Core concept</label>
      </div>
      <div className="note-option-ctn">
        <span className="note-date">10 May 2022</span>
        <div className="note-option">
          <span className="priority fw-bold">High</span>
          <span className="material-icons-outlined icon-hover pd-xs br-full cursor-pointer">
            palette
          </span>
          <span className="material-icons-outlined icon-hover pd-xs br-full cursor-pointer">
            label
          </span>
          <span className="material-icons-outlined icon-hover pd-xs br-full cursor-pointer">
            archive
          </span>
          <span className="material-icons-outlined icon-hover pd-xs br-full cursor-pointer">
            edit
          </span>
          <span className="material-icons-outlined icon-hover pd-xs br-full cursor-pointer">
            delete
          </span>
        </div>
      </div>
    </div>
  );
};

export {Note};
