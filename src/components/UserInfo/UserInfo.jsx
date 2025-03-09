// Add the required props
export const UserInfo = ({ user }) => {
  const userHref = `mailto:${user.email}`;

  return (
    <a className="UserInfo" href={userHref}>
      {user.name}
    </a>
  );
};
