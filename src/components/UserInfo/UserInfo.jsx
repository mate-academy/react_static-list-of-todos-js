// Add the required props
export const UserInfo = ({ user }) => {
  if (user === undefined) {
    return '';
  }

  const userMailLink = `mailto:${user.email}`;

  return (
    <a className="UserInfo" href={userMailLink}>
      {user.name}
    </a>
  );
};
