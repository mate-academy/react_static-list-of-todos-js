// Add the required props
import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) => {
  return (
    <section className="TodoList">
      {/* <article className="TodoInfo TodoInfo--completed">
        <h2 className="TodoInfo__title">HTML</h2>

        <a className="UserInfo" href="mailto:Sincere@april.biz">
          Leanne Graham
        </a>
      </article> */}
      {todos.map(item => (
        <TodoInfo todo={item} key={item.id} />
      ))}
    </section>
  );
};
