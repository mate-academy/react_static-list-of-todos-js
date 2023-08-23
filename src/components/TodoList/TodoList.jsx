import React from 'react';
import PropTypes from 'prop-types';
import { TodoInfo } from '../TodoInfo';

const TodoList = ({ todos }) => {
  if (!todos || todos.length === 0) {
    return <div className="TodoList">No todos to display.</div>;
  }

  return (
    <section className="TodoList">
      {todos.map(({ id, ...todo }) => (
        <TodoInfo key={id} todo={todo} />
      ))}
    </section>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default TodoList;
