import cn from 'classnames';

export const UserInfo = ({ todo }) => (
  <article className={cn('TodoInfo',
    { 'TodoInfo--completed': todo.completed === true })}
  >
    <h2 className="TodoInfo__title">
      {todo.title}
    </h2>

    <a className="UserInfo" href={`mailto:${todo.user.email}`}>
      {todo.user.name}
    </a>
  </article>
);
