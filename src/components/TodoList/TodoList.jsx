import { TodoInfo } from '../TodoInfo/TodoInfo'; // Importăm componenta TodoInfo

export const TodoList = ({ todos }) => (
  <div className="TodoList">
    {todos.map(todo => (
      <TodoInfo key={todo.id} todo={todo} /> // Renderizăm fiecare TODO folosind componenta TodoInfo
    ))}
  </div>
);
