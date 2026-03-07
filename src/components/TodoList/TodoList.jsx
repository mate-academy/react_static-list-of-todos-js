import { TodoInfo } from '../TodoInfo/TodoInfo';

// Add the required props
export const TodoList = ({ todosFromServer, usersFromServer }) => {
  // const { id, userId, completed, title } = todosFromServer;
  return (
    <section className="TodoList">
      {todosFromServer.map(todo => {
        return <TodoInfo users={usersFromServer} todo={todo} />;
      })}
    </section>
  );
};
