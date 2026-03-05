export const UserInfo = ({ user }) => {
  if (!user) {
    return null;
  }

  const href = `mailto:${user.email}`;

  return (
    <a className="UserInfo" href={href}>
      {user.name}
    </a>
  );
};
