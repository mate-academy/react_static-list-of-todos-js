import classNames from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todoTask }) => (
  <>
    <article
      className={classNames({
        TodoInfo: true,
        'TodoInfo--completed': todoTask.completed === true,
      })}
    >
      <h2 className="TodoInfo__title">{todoTask.title}</h2>
      <UserInfo userName={todoTask.user.name} userEmail={todoTask.user.email} />
    </article>
  </>
);
