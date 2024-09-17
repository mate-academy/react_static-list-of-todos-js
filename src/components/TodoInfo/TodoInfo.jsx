import cn from 'classname';
import './TodoInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';

export function TodoInfo({ item }) {
  const { completed, title, user } = item;

  return (
    <article
      className={cn('TodoInfo', {
        'TodoInfo--completed': completed,
      })}
    >
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo user={user} />
    </article>
  );
}
