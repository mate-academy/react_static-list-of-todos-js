import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <>
    {todos.map(todo => (
      <section className="TodoList">
        <TodoInfo todo={todo} />
      </section>
    ))}
  </>
);
