/* eslint-disable prettier/prettier */
// Add the required props
import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  <>
    <a key={user.id} className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  </>
);
