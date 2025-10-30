import PropTypes from 'prop-types';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  if (!todo) return null;
  const articleClasses = [
    'TodoInfo',
    todo.completed ? 'TodoInfo--completed' : null,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <article className={articleClasses} aria-labelledby="todo-title">
      <h2 id="todo-title" className="TodoInfo__title">
        {todo.title || 'Без назви'}
      </h2>
      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};

TodoInfo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool,
    user: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
