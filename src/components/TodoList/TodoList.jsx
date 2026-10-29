import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(Aftertodo => (
      <TodoInfo key={Aftertodo.id} todo={Aftertodo} />
    ))}
  </ul>
);
