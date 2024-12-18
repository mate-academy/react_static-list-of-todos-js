export const UserInfo = ({ user }) => (
  // <>
  //   <h3>Name: {user.name}</h3>
  //   <h4>Username: {user.username}</h4>
  //   <h5>
  //     Email:
  //     <a href={`mailto:${user.email}`}>{user.email}</a>
  //   </h5>
  // </>
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
