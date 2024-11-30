import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => {
  return (
    <>
      {todos.map(todo => (
        <section key={todo.id} className="TodoList">
          <TodoInfo todo={todo} />
        </section>
      ))}
    </>
  );
};
