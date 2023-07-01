import { TodoInfo } from '../TodoInfo';

// Add the required props
export const TodoList = ({ todos }) => (
  <>
    {todos.map(todo => (
      <section className="TodoList" ket={todo.id}>
        <TodoInfo todo={todo} />
      </section>
    ))}

  </>
);
