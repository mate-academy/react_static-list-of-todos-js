import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user ? user.email : ''}`}>
    {user ? user.name : 'Unknown User'}
  </a>
);
