import React, { useState } from 'react';

export default function Forms() {
    
    
    const app = {
        title:"Todo App",
        description: "yapılacaklar",
        items: []
       
    }
    const [items,setItems] = useState(app.items);
    const [itemcount,setItemcount] = useState(app.items.length);


    
    
    


    const addItems = (item) => {
        items.push(item)
        app.items = items
       
        return items
    }


    const onFormSubmit = (e) => {
        e.preventDefault();

        var item = e.target.elements.txtItem.value;
        if(item) {
            setItems(addItems(item));
            setItemcount(itemcount+1)
            e.target.elements.txtItem.value="";
        }
    
        console.log("form submitted")
        console.log(items)
        console.log(app.items)
        console.log(itemcount)
    }
    
    const clearItems = () => {
        setItems([])
        setItemcount(0)
    }
        
        
    
    return (

        


        <div>
            <h1 id="header">{app.title}</h1>
            <div>{app.description}</div>
            
            {<ul>
                {items.map((item,idx) => {return  <li key={idx}>{item}</li>})}
            </ul>}
            
            
            <p id="todoLength">{itemcount}</p>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="txtItem" />
                <button type="submit">Add Item</button>
                <button onClick={clearItems}>clear Items</button>
            </form>
        
        </div>
    )
}
