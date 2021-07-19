    
import React, { useState } from "react";

import {FormGroup, Form , InputGroup , Input , InputGroupAddon } from 'reactstrap' ; 
import {v4} from "uuid";
import { Button } from "bootstrap";

const TodoForm = (addTodos)=>{

    const [todoString, setTodoString]= useState("");

    const handleSubmit= e =>{
        e.preventDefault();
        if(todoString===""){
            return alert("Enter TODO");               
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        
        const todo= {
            todoString,
            id: v4()
        }
        addTodos(todo)

        setTodoString("")

    }

    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Enter ToDo"
                    value={todoString}
                    onChange={e => setTodoString(e.target.value)}
                    />

                    <InputGroupAddon addonType="prepend">
                    <Button color="success">Add Todo </Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    );

 };

 export default TodoForm;