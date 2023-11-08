// Add the required props
import './TodoInfo.scss';
import cl from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, completed, user } = todo;

  return (
    <>
      <article className={cl('TodoInfo', {
        'TodoInfo--completed': completed,
      })}
      >

        <h2 className="TodoInfo__title">
          {title}
        </h2>

        <UserInfo user={user} />
      </article>
    </>
  );
};
