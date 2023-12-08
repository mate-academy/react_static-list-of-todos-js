// Add the required props
export const UserInfo = ({ user }) => {
  const { name, username, email } = user;

  return (
    <div>
      <a className="UserInfo" href={`mailto:${email}`}>
        <p>{name}</p>
        <p>{username}</p>
        {email}
      </a>
    </div>
  );
};
