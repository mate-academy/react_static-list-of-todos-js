import { TodoInfo } from '../TodoInfo/TodoInfo';

// Add the required props
export const TodoList = ({ todos }) => (
  <>
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo todo={todo} users={todo.user} />
      ))}
    </section>
  </>
);
