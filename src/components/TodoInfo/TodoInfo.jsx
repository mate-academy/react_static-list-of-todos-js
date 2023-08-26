import cn from 'classnames';
import usersFromServer from '../../api/users.json';
import '../../App.scss';

export const TodoInfo = ({ title, tusk, todosUserId }) => (
  <div className={cn('TodoInfo', {
    'TodoInfo--completed': tusk === true,
  })}
  >
    <h2 className="TodoInfo__title">
      {title}
    </h2>
    {usersFromServer.map(user => (
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {todosUserId === user.id && user.name}
      </a>
    ))}
  </div>
);
