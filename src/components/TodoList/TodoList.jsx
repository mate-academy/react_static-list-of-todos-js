import { TodoInfo } from '../TodoInfo/TodoInfo';

// Add the required props
export const TodoList = ({ todos }) => (
  <>
    <section className="TodoList">
      {todos.map(todo => {
        return <TodoInfo key={todo.id} todo={todo} />;
      })}
    </section>
  </>
);
