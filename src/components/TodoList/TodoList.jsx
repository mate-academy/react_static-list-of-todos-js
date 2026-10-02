// Add the required props
// eslint-disable-next-line import/named, import/no-named-as-default
import TodoInfo from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => {
        return <TodoInfo key={todo.id} todo={todo} />;
      })}
    </section>
  );
};
