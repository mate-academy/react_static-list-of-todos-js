import PropTypes from 'prop-types';

export const UserInfo = ({ user }) => {
  if (!user) return null;

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};

UserInfo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
