import { TodoInfo } from '../TodoInfo/TodoInfo';

// Add the required props
export const TodoList = ({ todosFromServer }) => {
  return (
    <section className="TodoList">
      {todosFromServer.map(todo => {
        return <TodoInfo key={todo.id} todo={todo} />;
      })}
    </section>
  );
};
