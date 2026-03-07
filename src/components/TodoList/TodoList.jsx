import { TodoInfo } from '../TodoInfo/TodoInfo';

// Add the required props
export const TodoList = ({ todosFromServer, user }) => {
  return (
    <section className="TodoList">
      {todosFromServer.map(todo => {
        return user.id === todo.userId ? (
          <TodoInfo key={todo.id} user={user} todo={todo} />
        ) : (
          ''
        );
      })}
    </section>
  );
};
