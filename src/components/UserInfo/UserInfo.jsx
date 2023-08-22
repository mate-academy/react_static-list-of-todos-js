import PropTypes from 'prop-types';

export const UserInfo = ({ user }) => {
  const {
    email,
    name,
  } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};

UserInfo.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
