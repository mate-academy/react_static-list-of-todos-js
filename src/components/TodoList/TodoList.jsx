import { TodoInfo } from '../TodoInfo';

// Add the required props
export const TodoList = ({ todos }) => (
  <section className="TodoList">
    <div>
      {todos.map(todo => (
        <TodoInfo todo={todo} key={todo.id} />
      ))}
    </div>
  </section>
);
