// Add the required props
const getHref = email => `mailto:${email}`;

export const UserInfo = ({ user }) => {
  return (
    <a className="UserInfo" href={getHref(user.email)}>
      {user.name}
    </a>
  );
};
