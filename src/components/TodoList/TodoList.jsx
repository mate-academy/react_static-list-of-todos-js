import { TodoInfo } from '../TodoInfo/TodoInfo';
// Add the required props
export const TodoList = ({ todos }) => (
  <section
    className="TodoList"
    key={todos.id}
  >
    {todos.map(todo => (
      <TodoInfo
        todo={todo}
        key={todo.id}
      />
    ))}
  </section>
);
