export const UserInfo = ({ user }) => {
  return (
    <a className="UserInfo" href={`mailto:${user.email}`} key={user.id}>
      {user.name}
    </a>
  );
};
