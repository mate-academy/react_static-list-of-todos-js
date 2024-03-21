// Add the required props
import cn from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => {
  const { title, completed, user } = todo;
  const componentClassList = cn('TodoInfo', {
    'TodoInfo--completed': completed,
  });

  return (
    <article className={componentClassList}>
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo user={user} />
    </article>
  );
};
