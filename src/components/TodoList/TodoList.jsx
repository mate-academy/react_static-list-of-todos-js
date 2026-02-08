/* <>TodoList markup</>; */
// Add the required props
// import { useReducer } from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';
// import { UserInfo } from '../UserInfo/UserInfo';

// export const TodoList = ({ todo, user }) => (
//   <article className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}>
//     <TodoInfo todo={todo} />

//     <UserInfo user={user} />
//   </article>
// );
export const TodoList = ({ todos }) => {
  if (!todos.length) {
    return null;
  }

  return (
    <>
      {todos.map(todo => (
        <TodoInfo key={todo.id} todo={todo} user={todo.user} />
      ))}
    </>
  );
};
