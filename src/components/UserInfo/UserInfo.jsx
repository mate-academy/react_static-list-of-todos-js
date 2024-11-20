// Add the required props
export const UserInfo = ({ user = null }) => {
  return (
    user === null || (
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    )
  );
};
