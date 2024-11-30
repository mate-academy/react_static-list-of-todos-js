// Add the required props
export const UserInfo = ({ user }) => {
  // console.log(user.email);

  return (
    user && (
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    )
  );
};
