import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <div className="todoList">
    {todos.map(todo => (
      <TodoInfo key={todo.id} todo={todo} />
    ))}
  </div>
);
