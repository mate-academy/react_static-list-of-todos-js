import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todoList }) => (
  <section className="TodoList">
    {todoList.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </section>
);
