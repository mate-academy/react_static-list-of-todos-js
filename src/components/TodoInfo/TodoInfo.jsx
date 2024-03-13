import cn from 'classnames';

export const TodoInfo = ({ todo }) => {
  const completed = todo.completed === true;

  return (
    todo.user && (
      <article className={cn('TodoInfo', { 'TodoInfo--completed': completed })}>
        <h2 className="TodoInfo__title">{todo.title}</h2>

        <a className="UserInfo" href={`mailto:${todo.user.email}`}>
          {todo.user.name}
        </a>
      </article>
    )
  );
};
