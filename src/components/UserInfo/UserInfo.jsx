export const UserInfo = ({ user }) => {
  const { name, email } = user;
  // consolr.log(user);

  return (
    <a className="UserInfo" href={email}>
      {name}
    </a>
  );
};
