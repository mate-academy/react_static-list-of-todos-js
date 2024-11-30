export const UserInfo = ({ user }) => (
  <>
    <a href={user.email ? `mailto:${user.email}` : ''} className="UserInfo">
      {user.name}
    </a>
  </>
);

export default UserInfo;
