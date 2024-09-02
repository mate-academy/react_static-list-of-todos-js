// Add the required props
import React from 'react';
import TodoInfo from '../TodoInfo';

const TodoList = ({ todos, users }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => {
        const user = users.find(u => u.id === todo.userId);

        return <TodoInfo key={todo.id} todo={todo} user={user} />;
      })}
    </div>
  );
};

export default TodoList;
