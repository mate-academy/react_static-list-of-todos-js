import { TodoInfo } from '../TodoInfo/TodoInfo';

// Add the required props
export const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li>
        <TodoInfo
          todo={{
            id: todo.id,
            userId: todo.userId,
            completed: todo.completed,
            title: todo.title,
            user: { ...todo.user },
          }}
        />
      </li>
    ))}
  </ul>
);
