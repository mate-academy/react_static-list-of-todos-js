import PropTypes from 'prop-types';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => (
  <article className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}>
    <h2 className="TodoInfo__title">
      {todo.title}
    </h2>
    {todo.user && <UserInfo user={todo.user} />}
  </article>
);

TodoInfo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
