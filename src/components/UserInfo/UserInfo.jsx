// Add the required props
// eslint-disable-next-line consistent-return
export const UserInfo = ({ user }) => {
  if (user) {
    return (
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    );
  }
};
