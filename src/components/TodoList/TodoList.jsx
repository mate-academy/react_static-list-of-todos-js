import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      todo.user && (
        <TodoInfo todo={todo} key={todo.id} />
      )
    ))}
    {/* <article className="TodoInfo TodoInfo--completed">
      <h2 className="TodoInfo__title">HTML</h2>

      <a className="UserInfo" href="mailto:Sincere@april.biz">
        Leanne Graham
        {console.log(todos)}
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
);
