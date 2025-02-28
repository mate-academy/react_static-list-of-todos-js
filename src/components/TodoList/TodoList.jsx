import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos, users }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => {
        const user = users.find(u => u.id === todo.userId);

        return <TodoInfo key={todo.id} todo={todo} user={user} />;
      })}
    </div>
  );
};
