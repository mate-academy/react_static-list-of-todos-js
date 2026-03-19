// Add the required props
export const UserInfo = ({ user: { name } }) => {
  return (
    <a className="UserInfo" href="mailto:Sincere@april.biz">
      {name}
    </a>
  );
};
