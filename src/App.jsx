import './App.scss';

import PropTypes from 'prop-types';

import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';
import { TodoList } from './components/TodoList';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId)
      || null;
}

export const todos = todosFromServer.map(todo => ({
  ...todo,
  user: getUserById(todo.userId),
}));

export const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodoList todos={todos} />
  </div>
);

const TodoPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
});

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoPropTypes).isRequired,
};
