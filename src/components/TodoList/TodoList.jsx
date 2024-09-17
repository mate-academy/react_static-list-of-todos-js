import { TodoInfo } from '../TodoInfo/TodoInfo';

export function TodoList({ todos }) {
  return (
    <section className="TodoList">
      {todos.map(todoItem => (
        <TodoInfo todo={todoItem} key={todoItem.id} />
      ))}
    </section>
  );
}
