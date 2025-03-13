import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  return user ? (
    <a className="UserInfo" href={user.email ? `mailto:${user.email}` : '#'}>
      {user?.name || ''}
    </a>
  ) : (
    <p>❌ user information is unavailable ❌</p>
  );
};
