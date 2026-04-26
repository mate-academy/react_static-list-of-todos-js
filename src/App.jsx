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

    {todos.map(todo => (
      <article
        key={todo.id}
        className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
      >
        <h2 className="TodoInfo__title">{todo.title}</h2>

        {/* Виводимо дані юзера, якого ми вже знайшли вище в коді через getUserById */}
        {todo.user && (
          <a className="UserInfo" href={`mailto:${todo.user.email}`}>
            {todo.user.name}
          </a>
        )}
      </article>
    ))}
    <section className="TodoList">
      <TodoList todos={todos} />

      {/*      <article className="TodoInfo TodoInfo--completed">
        <h2 className="TodoInfo__title">HTML</h2>

        <a className="UserInfo" href="mailto:Sincere@april.biz">
          Leanne Graham
        </a>
      </article>

      <article className="TodoInfo TodoInfo--completed">
        <h2 className="TodoInfo__title">CSS</h2>

        <a className="UserInfo" href="mailto:Sincere@april.biz">
          Leanne Graham
        </a>
      </article>

      <article className="TodoInfo TodoInfo--completed">
        <h2 className="TodoInfo__title">JS</h2>

        <a className="UserInfo" href="mailto:Shanna@melissa.tv">
          Ervin Howell
        </a>
      </article>

      <article className="TodoInfo">
        <h2 className="TodoInfo__title">React</h2>

        <a className="UserInfo" href="mailto:Nathan@yesenia.net">
          Clementine Bauch
        </a>
      </article> */}
    </section>
  </div>
);
