
import { CREATE_TODO, REMOVE_TODO, ADD_FOR_FUTURE } from "./actions";

export const todos = (state=[], action) =>{
    
    const { type, payload } = action; 
    switch (type) {
        case CREATE_TODO: {
            const { text } =  payload;
            const newTodo  = {
                text,
                marked : false,
                isCompleted : false,
            };
            return state.concat(newTodo);
        }

        case REMOVE_TODO:{
            const { text } =  payload;
            return state.filter(todo => todo.text!== text);
        }

        case ADD_FOR_FUTURE: {
            const { text } =  payload;
            state.map(todo =>{
                if(todo.text === text) {
                    todo.isCompleted = true;
                    return todo;
                    //return { ...todo, isCompleted : true };
                }
                return todo;
            });
        }

        default:{
            return state;
        }
           
    }
}