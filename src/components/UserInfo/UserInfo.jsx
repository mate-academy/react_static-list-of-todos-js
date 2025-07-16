// Add the required props
export const UserInfo = ({ todo }) => {
  if (!todo.user) {
    return null;
  }

  return (
    <a className="UserInfo" href={`mailto:${todo.user.email}`}>
      {todo.user.name}
    </a>
  );
};
