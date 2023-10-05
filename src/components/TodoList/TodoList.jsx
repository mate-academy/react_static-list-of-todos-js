import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ props }) => (
  <section className="TodoList">

    {props && props.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}

  </section>
);
