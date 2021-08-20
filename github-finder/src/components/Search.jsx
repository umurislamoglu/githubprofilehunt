// import React, { Component } from "react";

// export class Search extends Component {
//   constructor(props) {
//     super(props);
//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//     this.state = {
//       keyword: "",
//     };
//   }

//   onChange(e) {
//     this.setState({
//       keyword: e.target.value,
//     });
//   }
//   onSubmit(e) {
//     e.preventDefault();
//     if(this.state.keyword === ""){
//         this.props.setAlert("Lütfen bir anahtar kelime giriniz.","danger")
//     } else {
//         this.props.searchUsers(this.state.keyword);
//         this.setState({ keyword: "" });
        
      
//     }
   
//   }

//   render() {
//     return (
//       <div className="container my-3">
//         <form onSubmit={this.onSubmit}>
//           <div className="input-group">
//             <input
//               type="text"
//               value={this.state.keyword}
//               onChange={this.onChange}
//               className="form-control"
//             />
//             <div className="input-group-append">
//               <button type="submit" className="btn btn-primary">
//                 Search
//               </button>
//             </div>
//           </div>
//         </form>
//         {this.props.showClearButton && (
//           <div className="d-grid gap-2 mt-3 ">
//             <button
//               className="btn btn-danger btn-md "
//               onClick={this.props.clearUsers}
//             >
//               {" "}
//               Clear Results
//             </button>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default Search;


import React, {useState,useContext} from 'react'
import GithubContext from './../context/github/GithubContext';
import AlertContext from "../context/alert/AlertContext";



export default function Search() {

    const {searchUsers, clearUsers,users} =useContext(GithubContext)
    const {setAlert} =useContext(AlertContext)
 
    const[keyword,setKeyword] = useState("")
    
  

  const onChange =(e) => {
    setKeyword(e.target.value);
  }
  const onSubmit=(e) => {
    e.preventDefault();
    if(keyword === ""){
      setAlert("Lütfen bir anahtar kelime giriniz.","danger")
    } else {
      searchUsers(keyword);
      setKeyword("");
        
      
    }
   
  }
  return (
      <div className="container my-3">
        <form onSubmit={onSubmit}>
          <div className="input-group">
            <input
              type="text"
              value={keyword}
              onChange={onChange}
              className="form-control"
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </form>
        {users.length>0 && (
          <div className="d-grid gap-2 mt-3 ">
            <button
              className="btn btn-danger btn-md "
              onClick={clearUsers}
            >
              {" "}
              Clear Results
            </button>
          </div>
        )}
      </div>
  );
        }
  

