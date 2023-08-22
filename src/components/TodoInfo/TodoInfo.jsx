import PropTypes from 'prop-types';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const {
    title,
    user,
    completed,
  } = todo;

  return (
    <article className={`TodoInfo ${completed ? 'TodoInfo--completed' : ''}`}>
      <h2 className="TodoInfo__title">{title}</h2>

      {user && <UserInfo user={user} />}
    </article>
  );
};

TodoInfo.propTypes = {
  todo: PropTypes.shape({
    completed: PropTypes.bool,
    title: PropTypes.string.isRequired,
    user: PropTypes.number.isRequired,
  }).isRequired,
};
