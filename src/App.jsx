import './App.scss';
import { TodoList } from './components/TodoList';


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
    <TodoList todoElements={todos} />
    {/*<section className="TodoList">*/}
    {/*  <article className="TodoInfo TodoInfo--completed">*/}
    {/*    <h2 className="TodoInfo__title">HTML</h2>*/}

    {/*    <a className="UserInfo" href="mailto:Sincere@april.biz">*/}
    {/*      Leanne Graham*/}
    {/*    </a>*/}
    {/*  </article>*/}

    {/*  <article className="TodoInfo TodoInfo--completed">*/}
    {/*    <h2 className="TodoInfo__title">CSS</h2>*/}

    {/*    <a className="UserInfo" href="mailto:Sincere@april.biz">*/}
    {/*      Leanne Graham*/}
    {/*    </a>*/}
    {/*  </article>*/}

    {/*  <article className="TodoInfo TodoInfo--completed">*/}
    {/*    <h2 className="TodoInfo__title">JS</h2>*/}

    {/*    <a className="UserInfo" href="mailto:Shanna@melissa.tv">*/}
    {/*      Ervin Howell*/}
    {/*    </a>*/}
    {/*  </article>*/}

    {/*  <article className="TodoInfo">*/}
    {/*    <h2 className="TodoInfo__title">React</h2>*/}
      {/*  <a className="UserInfo" href="mailto:Nathan@yesenia.net">*/}
      {/*    Clementine Bauch*/}
      {/*  </a>*/}
      {/*</article>*/}
    {/*</section>*/}
  </div>
);


