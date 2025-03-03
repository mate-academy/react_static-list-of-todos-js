import { TodoInfo } from '../TodoInfo/TodoInfo';

// Add the required props
export const TodoList = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.length > 0 &&
        todos.map(item => <TodoInfo key={item.id} todo={item} />)}
    </section>
  );
};
