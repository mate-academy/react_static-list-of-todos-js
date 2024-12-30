/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
// Add the required props
import { TodoInfo } from "../TodoInfo/TodoInfo";

export const TodoList = ({ todos }) => (
<>
    {todos.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
</>
);
