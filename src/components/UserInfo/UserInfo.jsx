export const UserInfo = ({ user }) => {
  return (
    <a className="UserInfo" href={user.email && `mailto:${user.email}`}>
      {user.name && user.name}
    </a>
  );
};
