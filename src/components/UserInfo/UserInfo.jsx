// Add the required props
export const UserInfo = ({ user }) => {
  return (
    <a className="UserInfo" href="mailto:Sincere@april.biz">
      {user.name}
    </a>
  );
};
