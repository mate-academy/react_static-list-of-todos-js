import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo
        key={todo.id}
        title={todo.title}
        complete={todo.completed}
        user={todo.user}
      />
    ))}
  </section>
);
