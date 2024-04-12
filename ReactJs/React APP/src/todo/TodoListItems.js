import React from "react";
import "./TodoListItems.css";

const comp = ({ todo, onRemovePressed, addForFutureShopping }) =>(
    <div className="todo-list-container">
           <h2 className="todo-text">{todo.text}</h2>
           <div className="todo-button-container "> 
               <div>
                { todo.isCompleted
                ? null
                : <button className="completed-button"
                onClick={() => addForFutureShopping(todo.text)}>Add for future</button>
                }
               <button className="remove-button"
               onClick={() => onRemovePressed(todo.text)}
               >Remove</button>
               </div>
           </div>
           
    </div>
);

export const TodoListItems = comp;