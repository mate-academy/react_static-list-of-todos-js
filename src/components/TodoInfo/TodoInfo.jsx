import { UserInfo } from '../UserInfo/UserInfo';

import './TodoInfo.scss';

export function TodoInfo({ todo }) {
  const { completed, title, user } = todo;

  return (
    <article className={`TodoInfo ${completed ? 'TodoInfo--completed' : ''}`}>
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo user={user} />
    </article>
  );
}
