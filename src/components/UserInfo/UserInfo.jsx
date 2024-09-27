// Add the required props
export const UserInfo = ({ user }) => {
  return (
    user && (
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    )
  );
};
