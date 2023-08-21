import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <ul
    className="TodoList"
    style={{
      listStyle: 'none',
      padding: 0,
      margin: 0,
    }}
  >
    {todos.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </ul>
);
