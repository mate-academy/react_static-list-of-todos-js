export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <div key={todo.id}>{todo.title}</div>
    ))}
  </section>
);
