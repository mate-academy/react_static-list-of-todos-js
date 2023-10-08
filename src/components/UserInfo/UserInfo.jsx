import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  <>
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  </>
);

// {"mailto:${user.email}"}
