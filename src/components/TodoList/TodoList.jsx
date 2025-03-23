import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      // There is a key prop in the TodoInfo component within your TodoList component.
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </section>
);
