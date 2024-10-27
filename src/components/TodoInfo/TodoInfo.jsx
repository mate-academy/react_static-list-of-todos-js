import{UserInfo} from '../UserInfo';
import classNames from 'classnames';

export const TodoInfo = ({todo}) => (
  <article className={classNames('TodoInfo', {
    'TodoInfo--completed': todo.completed,
  })}>
    <h2 className="TodoInfo__title">
      {todo.title}
    </h2>

    {todo.user &&
      (<UserInfo user={todo.user} key={todo.user.id}/>)
}
  </article>
);
