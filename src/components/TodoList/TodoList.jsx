import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) => {
  return (
    <>
      {todos.length > 0 && (
        <ul>
          {todos.map(el => {
            return <TodoInfo key={el.id} todo={el} />;
          })}
        </ul>
      )}
    </>
  );
};
