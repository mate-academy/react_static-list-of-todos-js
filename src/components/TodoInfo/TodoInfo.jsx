import React from 'react';
import UserInfo from './UserInfo';
import './TodoInfo.css';

function TodoInfo({ todo }) {
    return (
        <div className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`} data-cy="todo">
            <h3 className="TodoInfo__title">{todo.title}</h3>
            {todo.user && <UserInfo user={todo.user} />}
        </div>
    );
}

export default TodoInfo;
