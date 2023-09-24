import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  <>
    {user && (
      <a className="UserInfo" href={user.email}>
        {user.name}
      </a>
    )}
  </>
);
