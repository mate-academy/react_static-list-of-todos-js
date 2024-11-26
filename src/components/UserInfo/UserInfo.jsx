// Add the required props
export const UserInfo = ({ user }) => {
  const { name, email } = user;
  const href = `mailto:${email}`;

  return (
    <a className="UserInfo" href={href}>
      {name}
    </a>
  );
};
