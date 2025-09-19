// Add the required props
export const UserInfo = ({ user }) => {
  return (
    <a className="UserInfo" href={user.email}>
      {user.name}
    </a>
  );
};
