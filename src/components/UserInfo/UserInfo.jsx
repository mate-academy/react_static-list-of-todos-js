export const UserInfo = ({ user }) => {
  const { name, email } = user;

  return (
    <a className="UserInfo" href={email}>
      {name}
    </a>
  );
};
