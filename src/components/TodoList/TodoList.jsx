import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(item => {
      return <TodoInfo key={item.id} todo={item} />;
    })}
  </section>
);
