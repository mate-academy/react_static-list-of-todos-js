import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = props => (
  <section className="TodoList">
    {props.todos.map(todo => (
      <TodoInfo key={todo.id} todo={todo} />
    ))}
  </section>
);
