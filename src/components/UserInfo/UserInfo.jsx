// Add the required props
import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`} key={user.id}>
    {user.name}
  </a>
);
