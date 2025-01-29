// Add the required props
// { "id": 1, "userId": 1, "completed": false, "title": "delectus aut autem" },

import { UserInfo } from '../UserInfo';

//   { "id": 1, "name": "Leanne Graham", "username": "Bret", "email": "Sincere@april.biz" },
export const TodoInfo = ({ todo }) => {
  return (
    <article
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
