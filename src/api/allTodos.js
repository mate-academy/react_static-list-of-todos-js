import todosFromServer from './todos.json';
import usersFromServer from './users.json';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId)
      || null;
}

export const todos = todosFromServer.map(todo => ({
  ...todo,
  user: getUserById(todo.userId),
}));
