import React from 'react';
import TodoInfo from './TodoInfo';
import './TodoList.css';

function TodoList({ todos }) {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoInfo key={todo.id} todo={todo} />
            ))}
        </div>
    );
}

export default TodoList;
