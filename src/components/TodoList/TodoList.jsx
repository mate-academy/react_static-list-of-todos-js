import {TodoInfo} from '../TodoInfo';
export const TodoList = ({ todos }) => (
  <selection className = "TodoList">
    {todos.map(todo => (
      <TodoInfo key = {todo.id} todo={todo}/>
    ))}
  </selection>
);
