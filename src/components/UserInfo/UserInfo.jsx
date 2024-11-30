// Add the required props
import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  const { name, email } = user;

  if (Object.keys(user) === 0) {
    return '';
  }

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
