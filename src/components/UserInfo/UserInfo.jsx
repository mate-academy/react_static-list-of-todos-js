// Add the required props
import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  return (
    <>
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    </>
  );
};

export default UserInfo;
