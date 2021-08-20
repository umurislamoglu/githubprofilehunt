import React from 'react'

export default function Header(props) {
    
    return (
        
             <div>
                <h1>{props.title}</h1>
                <div>{props.description}</div>
            </div>  
           
    )
}
// import React, { Component } from 'react'

// export default class Header extends Component {
//     render() {
//         return (
//             <div>
//                   <h1>{this.props.title}</h1>
//                   <div>{this.props.description}</div>
//                   </div> 
//         )
//     }
// }
