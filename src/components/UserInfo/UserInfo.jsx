// Add the required props
export const UserInfo = ({ todo }) => {
  const { name, username, email } = todo.user;

  return (
    <div>
      <p>{name}</p>
      <p>{username}</p>
      <a className="UserInfo" href="mailto:Sincere@april.biz">
        {email}
      </a>
    </div>
  );
};
