import './UserInfo.scss';

export const UserInfo = ({ user }) =>
  !user ? null : (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
