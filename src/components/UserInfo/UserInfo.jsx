export const UserInfo = ({ user }) => {
  const users = { ...user };

  return (
    <a className="UserInfo" href={`mailto:${users.email}`}>
      {users.name}
    </a>
  );
};
