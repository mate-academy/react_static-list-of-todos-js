import { TodoInfo } from '../TodoInfo';

// Add the required props
export const TodoList = ({ todoList }) => (
  <section className="TodoList">
    {todoList.map(todo => (
      <TodoInfo
        key={todo.id}
        todo={todo}
      />
    ))}
  </section>
);
