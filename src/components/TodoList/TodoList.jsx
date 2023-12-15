import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <>
    <section className="TodoList">
      {todos.map(item => (
        <TodoInfo key={item.id} todo={item} />
      ))}
    </section>
  </>
);
