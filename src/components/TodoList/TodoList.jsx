import { TodoInfo } from '../TodoInfo/TodoInfo';

// Add the required props
export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}

    {/* <article className="TodoInfo TodoInfo--completed">
    <h2 className="TodoInfo__title">HTML</h2>

    <a className="UserInfo" href="mailto:Sincere@april.biz">
      Leanne Graham
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
