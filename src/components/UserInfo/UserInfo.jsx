export const UserInfo = ({ user }) => {
  let userInfo = '';

  if (user) {
    userInfo = (
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    );
  }

  return userInfo;
};
