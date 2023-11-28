import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo
        key={todo.id}
        userId={todo.userId}
        completed={todo.completed}
        title={todo.title}
      />
    ))
    }
  </section>
);
