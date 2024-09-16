import './App.scss';

import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';
import { TodoList } from './components/TodoList/TodoList';

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
      <TodoList todos={todos} />
    </section>

    {/* <article className="TodoInfo">
      <h2 className="TodoInfo__title">React</h2>

      <a className="UserInfo" href="mailto:Nathan@yesenia.net">
        Clementine Bauch
      </a>
    </article> */}
  </div>
);
