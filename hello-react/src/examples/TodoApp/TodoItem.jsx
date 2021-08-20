// import React, { Component } from 'react'

// export default class TodoItem extends Component {


//     render() {
        
//         return (
            
//                 <li>
//                     {this.props.content}
//                     <button onClick={() => {this.props.deleteItem(this.props.content)}}>x</button>
//                     </li>
            
//         )
//     }
// }

import React from 'react'

export default function TodoItem(props) {
    return (
            
        <li className="list-group-item ">
            {props.content}
            <button className="btn btn-danger btn-sm float-end" onClick={() => {props.deleteItem(props.content)}}>x</button>
            </li>
    
)
}

