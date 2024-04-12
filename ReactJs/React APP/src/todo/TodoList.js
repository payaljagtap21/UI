import React from "react";
import { TodoListItems } from "./TodoListItems";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css"
import { connect } from "react-redux";
import { addForFuture, removeTodo } from "./actions";
import { displayAlert } from "./thunks";

// const people = [
//     'Creola Katherine Johnson: mathematician',
//     'Mario José Molina-Pasquel Henríquez: chemist',
//     'Mohammad Abdus Salam: physicist',
//     'Percy Lavon Julian: chemist',
//     'Subrahmanyan Chandrasekhar: astrophysicist'
//   ];

//const data = [{text : "Todo Item 1"}, {text : "Todo Item 2"}, {text : "Todo Item 3"}];
  
const TodoList = ({todos = [], onRemovePressed, addForFutureShopping }) => (
    
    <div className="list-wrapper">
        <NewTodoForm/>
        {todos.map(todo => <TodoListItems todo={todo} 
        onRemovePressed = {onRemovePressed} 
        //addForFutureShopping={onDisplayAlertClick}
        addForFutureShopping={addForFutureShopping}
        />)}
    </div>
);

const mapStateToProps = state => ({
    todos :state.todos,
});

const mapDispatchToProps = dispatch =>({
     onRemovePressed: text => dispatch(removeTodo(text)),
     addForFutureShopping: text => dispatch(addForFuture(text)),
     //onDisplayAlertClick :text => dispatch(displayAlert(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);