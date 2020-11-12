import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useForm } from 'react-hook-form';
import ListView from '../../Components/ListView';


const Grocery = ({ }) => {
    const [items, setGroceryItems] = useState([{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }]);
    const updateCount = (action, index) => {
        let votes = items[index].votes;
        if (action === 'increment') {
            items[index].votes = ++votes;
        }
        if (action === 'increment') {
            items[index].votes = ++votes;
        }
        else if (votes >= 1) {
            items[index].votes = --votes;
        }

        let updatedItems = [...items];
        setGroceryItems(updatedItems);


    }
    const { handleSubmit, register } = useForm();
    const onSubmit = (data, e) => {
        console.log(data);
        let newState = [...items, {name: data.itemname, votes: 0}];
        setGroceryItems(newState);
        e.target.reset();
        
    };
    return (
        <div>
            <div>
                <Form onSubmit={handleSubmit(onSubmit)}>

                    <Label>Name : </Label>
                    <input type="text" name="itemname" ref={register}/>

                    <button type="submit">Submit</button>
                </Form>
            </div>
            <ul>
                <ListView
                    lists={items}
                    updateCount={updateCount}
                    key={items}
                />
            </ul>
        </div>
    )


};

export default Grocery;