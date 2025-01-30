// Add the required props
export const UserInfo = ({ user }) => {
  const mailto = `mailto:${user.email}`;

  return (
    <a className="UserInfo" href={mailto}>
      {user.name}
    </a>
  );
};
