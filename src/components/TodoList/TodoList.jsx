import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      todo && (
        <TodoInfo
          title={todo.title}
          user={todo.user}
          key={todo.id}
        />
      )
    ))}
  </section>
);
