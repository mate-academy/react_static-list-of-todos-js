import classNames from 'classnames';

import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

export function TodoInfo({ todo }) {
  const { title, completed, user } = todo;

  return (
    <article className={
      classNames('TodoInfo', completed ? 'TodoInfo--completed' : '')}
    >
      <h2 className="TodoInfo__title">{title}</h2>
      <UserInfo user={user} />
    </article>
  );
}
