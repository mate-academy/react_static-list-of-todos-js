import cn from 'classnames';

export const TodoInfo = (
  { todo: { completed, title, user: { name, email } } },
) => (
  <article
    className={cn('TodoInfo', {
      'TodoInfo--completed': completed,
    })}
  >
    <h2 className="TodoInfo__title">{title}</h2>

    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  </article>
);
