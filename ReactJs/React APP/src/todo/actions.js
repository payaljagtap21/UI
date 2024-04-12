import React from 'react';

export const CREATE_TODO = 'CREATE_TODO';

export const createTodo = text => ({
    type : CREATE_TODO,
    payload : { text }
});

export const REMOVE_TODO = 'REMOVE_TODO';

export const removeTodo = text => ({
    type : REMOVE_TODO,
    payload : { text }
});

export const ADD_FOR_FUTURE = 'ADD_FOR_FUTURE';

export const addForFuture = (text) => ({
    type : ADD_FOR_FUTURE,
    payload : { text }
});