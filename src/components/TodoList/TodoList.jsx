import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => {
  const mappingPeople = todos.map(todo => {
    return <TodoInfo todo={todo} />;
  });

  return <section className="TodoList">{mappingPeople}</section>;
};
