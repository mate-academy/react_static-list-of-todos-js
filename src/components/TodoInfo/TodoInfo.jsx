import classNames from 'classnames';

export const TodoInfo = ({ todo }) => (
  <article
    className={classNames('TodoInfo', {
      'TodoInfo--completed': todo.completed === true,
    })}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <a className="UserInfo" href={`mailto:${todo.user.email}`}>
      {todo.user.name}
    </a>
  </article>
);
