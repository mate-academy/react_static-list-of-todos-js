import TodoInfo from '../TodoInfo/TodoInfo';

export default function TodoList({ todos }) {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo key={todo.id} todo={todo} />
      ))}
    </section>
  );
}
