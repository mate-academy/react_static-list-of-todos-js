// Add the required props
export const UserInfo = ({ user }) => {
  const {
    name,
  } = user;

  return (
    <a className="UserInfo" href="mailto:Sincere@april.biz">
      {name}
    </a>
  );
};
