export const UserInfo = ({ todo: user }) => {
  if (!user) return null;

  return (
    <a className="UserInfo" href={user.email}>
      {user.name}
    </a>
  );
};
