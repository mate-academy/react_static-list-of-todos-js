import { TodoInfo } from '../TodoInfo/TodoInfo';

export function TodoList({ todos }) {
  return (
    <section className="TodoList">
      {todos.map(todoItem => (
        <TodoInfo item={todoItem} key={todoItem.id} />
      ))}
    </section>
  );
}
