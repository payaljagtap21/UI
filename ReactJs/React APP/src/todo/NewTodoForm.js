import React,{useState} from "react";
import { connect } from "react-redux";
import "./NewTodoForm.css";
import TodoList from "./todoList";
import { TodoListItems } from "./TodoListItems";
import { createTodo } from "./actions";

const NewTodoForm = ({ todos=[], onCreatePressed }) =>{
    const [inputTextValue, setInputText] = useState('');
    return (
   <div className="new-todo-form">
        <div>
        <input type="text" className="new-todo-input"
               placeholder="  Type your new todo here.." 
               value={inputTextValue} 
               onChange={e=>setInputText(e.target.value)}/>
         <button 
         onClick={()=>{
            const isDuplicateText = todos.some(todo => todo.text === inputTextValue);
            if(!isDuplicateText){
                  onCreatePressed(inputTextValue);
                  setInputText('');
            }
         }}
         className="new-todo-button">
         Create Todo
         </button> 
        </div>
      
   </div>
    );
}

const mapStateToProps = state => ({
     todos :state.todos,
});

const mapDispatchToProps = dispatch =>({
      onCreatePressed:text => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);