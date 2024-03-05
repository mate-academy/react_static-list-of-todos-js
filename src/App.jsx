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

const TodoInfo = () => {};

const TodoList = ({ todo }) => (
  <section className="TodoList">
    {todo.map(element => (
      <article
        key={element.id}
        className={`TodoInfo ${element.completed ? 'TodoInfo--completed' : ''}`}
      >
        <h2 className="TodoInfo__title">${element.title}</h2>

        <a className="UserInfo" href={`mailto:${element.user.email}`}>
          {element.user.name}
        </a>
      </article>
    ))}
  </section>
);

export const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodoList todo={todos} />
  </div>
);
