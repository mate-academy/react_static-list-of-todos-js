import { TodoInfo } from '../TodoInfo';

// Add the required props
export const TodoList = ({ todos }) => (
  // <>TodoList markup</>
  <section className="TodoList">
    <>
      {todos.map(todo => (
        <TodoInfo todo={todo} />
      ))}
    </>
  </section>
);
