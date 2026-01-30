// Add the required props
export const UserInfo = ({ user }) => {
  const email = `mailto:${user.email}`;
  const { name } = user;

  return (
    <a className="UserInfo" href={email}>
      {name}
    </a>
  );
};
