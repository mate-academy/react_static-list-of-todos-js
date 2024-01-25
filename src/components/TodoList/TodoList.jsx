import { TodoInfo } from '../TodoInfo';

// Add the required props
export const TodoList = ({ todos }) => (
  <>
    {todos.map(userElement => (
      <TodoInfo
        todo={userElement}
        key={userElement.id}
      />
    ))}
  </>
);
