import React, { Component } from 'react'


export default class Formsclass extends Component {



    


    render() {


        var app = {
            title:"To Do List",
            description:"Jobs to do",
            items:["aa","bb"]
        }

        function onFormSubmit(e) {
            e.preventDefault();
            
            var item = e.target.elements.txtItem.value;

            if(item){
                app.items.push(item);
                e.target.elements.txtItem.value="";
               
            }
            
            console.log("form submitted")
            console.log(item)
            console.log(app.items)
        }
        

        
        return (
            <div>
                <h1 id="header">{app.title}</h1>
                <div>{app.description}</div>
                <ul>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                </ul>
                <p>{app.items.length}</p>
                <form onSubmit={onFormSubmit}>
                    <input type="text" name="txtItem" />
                    <button type="submit"> Add Item</button>
                </form>
            </div>
        )
    }
}
