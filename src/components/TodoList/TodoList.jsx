import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map(item => {
        return <TodoInfo key={item.id} todo={item} />;
      })}
    </section>
  );
};
