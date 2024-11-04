// Add the required props
// import usersFromServer from '../../api/users.json';

// export const UserInfo = (users) => (
//   <a className="UserInfo" href={users.email}>
//     {users.name}
//   </a>
// );

export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
