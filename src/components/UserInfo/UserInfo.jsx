import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  const { email, username } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {username}
    </a>
  );
};
