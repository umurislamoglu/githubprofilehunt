// import React, { Component } from "react";
// import { User } from "./User";
// import Loading from './Loading';

// export class Users extends Component {
  
//   render() {
//     if(this.props.loading){
//       return <Loading/>

//     }
//     else {
//       return (
//         <div className="container mt-3">
//           <div className="row">
//             {this.props.users.map((user,index) => (
//               <User user={user} key ={index} />
//             ))}
//           </div>
//         </div>
//       );
//     }
    
//   }
// }

// export default Users;


import { User } from "./User";
import Loading from './Loading';
import GithubContext from "../context/github/GithubContext";
import React, {useContext} from 'react'

export default function Users() {
  const githubContext = useContext(GithubContext)
  const { users,loading} = githubContext
    if(loading){
      return <Loading/>

    }
    else {
      return (
        <div className="container mt-3">
          <div className="row">
            {users.map((user,index) => (
              <User user={user} key ={index} />
            ))}
          </div>
        </div>
      );
    }
    
}



