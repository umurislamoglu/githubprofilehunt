import React, { useEffect , useReducer } from "react";
import notesReducer from "../reducers/notes";
import Notelist from "./Notelist";
import AddNoteForm from "./AddNoteForm";
import NotesContext from "../context/NotesContext";

 



export default function Noteapp() {


//   const [notes, setNotes] = useState([]);
     const [notes,dispatch] = useReducer(notesReducer,[])
  
  
    

  useEffect( () => {
    const notesData = JSON.parse(localStorage.getItem("notes"))
    if(notesData){
        dispatch({type:"POPULATE_NOTES",notes: notesData})
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('notes',JSON.stringify(notes))
  },[notes])

  return (

    <NotesContext.Provider value={{notes,dispatch}}>


    <div className="container p-5">
      <div className="card mb-3">
        <div className="card-header ">Notes</div>
        {
            notes &&(
                <table className="table table-sm table-striped mb-0">
                    <tbody>
                        {
                           <Notelist  />
                        }
                    </tbody>
                </table>
            )
        }
        
      </div>
      <div className="card mb-3">
          <div className="card-header">Add a New Note</div>
          <div className="card-body">
              <AddNoteForm dispatch={dispatch}/>
              </div>
      </div>
    </div>
    </NotesContext.Provider>
  );
}
