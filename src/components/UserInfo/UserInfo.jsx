// import users from '../../api/users.json';

export const UserInfo = ({ user }) => {
  return (
    <>
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    </>
  );
};
