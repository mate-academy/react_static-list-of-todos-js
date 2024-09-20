import './TodoInfo.scss';

import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo, users }) => {
  const { title, userId, completed } = todo;
  const findUser = id => users.find(user => user.id === id);

  return (
    <article className={`TodoInfo ${completed ? 'TodoInfo--completed' : ''}`}>
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo user={findUser(userId)} />
    </article>
  );
};
