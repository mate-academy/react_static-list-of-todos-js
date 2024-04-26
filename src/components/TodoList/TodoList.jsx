import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos: todoListProp }) => (
  <section className="TodoList">
    {todoListProp.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </section>
);
