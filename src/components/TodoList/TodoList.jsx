import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) => {
  return (
    <>
      {todos.length > 0 && (
        <ul>
          {todos.map(item => {
            return <TodoInfo key={item.id} todo={item} />;
          })}
        </ul>
      )}
    </>
  );
};
