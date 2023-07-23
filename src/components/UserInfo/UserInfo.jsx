import './UserInfo.scss';

export const UserInfo = ({ user }) => user && (
  <a className="UserInfo" href={user.email ? `mailto:${user.email}` : '#'}>
    {user.name}
  </a>
);
