import todosFromServer from '../../api/todos.json';
import usersFromServer from '../../api/users.json';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

export const todos = todosFromServer.map(todo => ({
  ...todo,
  user: getUserById(todo.userId),
}));

export const UserInfo = ({ user }) => {
  if (!user) return null;

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
