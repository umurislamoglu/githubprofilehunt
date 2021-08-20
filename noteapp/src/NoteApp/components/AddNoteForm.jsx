import React, {useState} from "react";

export default function AddNoteForm({ dispatch }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNote = (e) => {
    e.preventDefault();
    if (title) {
      //   setNotes([
      //       ...notes,
      //       {title,body}
      //   ])
      dispatch({ type: "ADD_NOTE", title, body });
      setTitle("");
      setBody("");
    }
  };

  return (
    <form onSubmit={addNote}>
      <div className="form-group">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="form-control mt-2"
        >
          {" "}
        </textarea>
      </div>
      <div className="d-grid gap-2">
        <button className="btn btn-primary">Add Note</button>
      </div>
    </form>
  );
}
