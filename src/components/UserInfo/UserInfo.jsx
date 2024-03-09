export const UserInfo = ({ user }) => {
  const email = `mailto:${user.email}`;

  return (
    <a className="UserInfo" href={email}>
      {user.name}
    </a>
  );
};
