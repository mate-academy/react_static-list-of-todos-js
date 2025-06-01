import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos?.map(todoItem => {
      return <TodoInfo key={todoItem.id} todo={todoItem} />;
    })}
  </section>
);
