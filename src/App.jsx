import './App.scss';

import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';
// import { TodoInfo } from './components/TodoInfo/TodoInfo';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

export const todos = todosFromServer.map(todo => ({
  ...todo,
  user: getUserById(todo.userId),
}));

export const TodoInfo = ({ todo }) => {
  const completed = todo.completed ? ' TodoInfo--completed' : '';

  return (
    <article className={`TodoInfo${completed}`}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <a className="UserInfo" href={todo.user.email}>
        {todo.user.name}
      </a>
    </article>
  );
};

export const TodoList = ({ todosList }) => (
  <section className="TodoList">
    {/* {console.log(todos)} */}
    {/* {todosList.map(todo => {
      const completed = todo.completed ? ' TodoInfo--completed' : '';

      return (
        <article key={todo.id} className={`TodoInfo${completed}`}>
          <h2 className="TodoInfo__title">{todo.title}</h2>

          <a className="UserInfo" href={todo.user.email}>
            {todo.user.name}
          </a>
        </article>
      );
    })} */}
    {todosList.map(todo => (
      <TodoInfo key={todo.id} todo={todo} />
    ))}
  </section>
);

export const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>

    {/* <section className="TodoList">
      <article className="TodoInfo TodoInfo--completed">
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
      </article>
    </section> */}
    <TodoList todosList={todos} />
  </div>
);
