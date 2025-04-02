import './App.scss';

import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

export const todos = todosFromServer.map(todo => ({
  ...todo,
  user: getUserById(todo.userId),
}));

export const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <section className="TodoList">
      {todos.map(todo => (
        <article
          key={todo.id}
          className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
        >
          <h2 className="TodoInfo__title">{todo.title}</h2>
          <a className="UserInfo" href={`mailto:${todo.user.email}`}>
            {todo.user.name}
          </a>
        </article>
      ))}
    </section>
  </div>
);
