import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <div id={todo.id}>
          <TodoInfo todo={todo} />
        </div>
      ))}
    </section>
  );
};
