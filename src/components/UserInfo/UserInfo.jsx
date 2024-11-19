// Add the required props
export const UserInfo = ({ user }) => {
  const mail = `mailto:${user.email}`;
  const { name } = user;

  return (
    <a className="UserInfo" href={mail}>
      {name}
    </a>
  );
};
