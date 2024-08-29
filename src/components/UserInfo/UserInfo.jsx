// Add the required props
export const UserInfo = ({ user: { name, email } }) => {
  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
