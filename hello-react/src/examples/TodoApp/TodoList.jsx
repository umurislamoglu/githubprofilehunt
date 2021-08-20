// import React, { Component } from "react";
// import TodoItem from "./TodoItem";

// export default class TodoList extends Component {

//   render() {
//     return (
//       <div>
//         <ul id="todoList">
//           {this.props.items.map((item, index) => (
//             <TodoItem deleteItem={this.props.deleteItem} key={index} content={item} />
//           ))}
//         </ul>
//         <p>
//           <button onClick={this.props.clearItems}>Clear Items</button>
//         </p>
//       </div>
//     );
//   }
// }

import React from 'react'
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  return (
    <div>
      <ul id="todoList" className="list-group">
        {props.items.map((item, index) => (
          <TodoItem deleteItem={props.deleteItem} key={index} content={item} />
        ))}
      </ul>
      {
      props.items.length > 0 
      ? 
      <p className="d-grid gap-2">
      <button className="btn  btn-outline-danger float-end mt-3" onClick={props.clearItems}>Clear Items</button>
      </p>
      :
        <p className="alert alert-warning"> Add item to start !</p>
    }
      
    </div>
  );
}

