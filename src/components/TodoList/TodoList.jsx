import { TodoInfo } from "../TodoInfo/TodoInfo";

// Add the required props
export const TodoList = ({ todos }) => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    {todos.map(todo => (
      <TodoInfo key={todo.id} todo={todo} />
    ))}
  </div>
);
