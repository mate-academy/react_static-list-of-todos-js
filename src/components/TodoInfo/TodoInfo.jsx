import './TodoInfo.scss';

import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const comletedTask = todo.completed ? 'TodoInfo--completed' : '';

  return (
    <article className={`TodoInfo ${comletedTask}`}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={todo.user} />
    </article>
  );
};
