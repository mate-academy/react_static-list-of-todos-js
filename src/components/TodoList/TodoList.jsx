
import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos = [], users = [] }) => (
  <section className="TodoList">
    {todos.map(todo => {
      // Знаходимо користувача за userId
      const user = users.find(u => u.id === todo.userId);

      return <TodoInfo key={todo.id} todo={todo} user={user} />;
    })}
  </section>
);
