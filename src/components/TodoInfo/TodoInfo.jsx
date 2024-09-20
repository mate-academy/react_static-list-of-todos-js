import './TodoInfo.scss';

import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo, users }) => {
  const { title, userId, completed } = todo;

  return (
    <article className={`TodoInfo ${completed ? 'TodoInfo--completed' : ''}`}>
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo user={users.find((user) => user.id === userId)} />
    </article>
  );
};
