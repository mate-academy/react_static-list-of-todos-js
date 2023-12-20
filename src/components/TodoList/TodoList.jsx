import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo
        key={todo.id}
        // todo={todo}
        completed={todo.completed}
        user={todo.user}
        title={todo.title}
      />
    ))}
  </section>
);
