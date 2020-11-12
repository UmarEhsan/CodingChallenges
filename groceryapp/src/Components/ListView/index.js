import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
const ListView = ({ lists, updateCount }) => {
    debugger;
    const handleClick = (action, index) => {
        updateCount(action, index);
     }
    
    const listItems = lists.map((item, index) =>
        <div key={index}>
            
            <li>{item.name}</li>
            <li >
                <button  onClick={() => handleClick('decrement', index)}>
                 <b> - </b>
                </button>
                    Votes:  {item.votes}
                <button onClick={() => handleClick('increment', index)}>
                  <b> + </b>
                </button>    
            </li>
           
            
        </div>

    );
    return (
        <ul>{listItems}</ul>
    );
}

export default ListView;