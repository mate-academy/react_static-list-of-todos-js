import { TodoInfo } from '../TodoInfo/TodoInfo';

// Add the required props
export const TodoList = ({ todos = [], users = [] }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => {
        const user = users.find(u => todo.userId === u.id);
        const todoWithUser = { ...todo, user };

        return <TodoInfo key={todo.id} todo={todoWithUser} />;
      })}
    </section>
  );
};
