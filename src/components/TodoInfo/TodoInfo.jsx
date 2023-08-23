// Add the required props
import CN from 'classnames';
import { UserInfo } from '../UserInfo';

import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => {
  const {
    title,
    completed,
    user,
  } = todo;

  return (
    <article className={CN('TodoInfo', { 'TodoInfo--completed': completed })}>
      <h2 className="TodoInfo__title">{title}</h2>

      {user && (<UserInfo user={user} />)}
    </article>
  );
};
