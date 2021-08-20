import React, {useContext} from "react";
import NotesContext from "../context/NotesContext";
export default function Note( {note}) {

    const {dispatch} = useContext(NotesContext);

  return (
    <tr key={note.title}>
      <td className="fw-bolder" style={{ width: "40%" }}>
        {note.title}
      </td>
      <td className="text-wrap">{note.body}</td>
      <td style={{ width: "3%" }}>
        <button
          onClick={() => dispatch({type:'REMOVE_NOTE',title:note.title})}
          className="btn btn-sm btn-danger"
        >
          <i className="far fa-times"></i>
        </button>
      </td>
    </tr>
  );
}
