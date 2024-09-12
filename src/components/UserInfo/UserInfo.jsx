// Add the required props
// import users from 'C:\Users\gorun\tasks\projects\react_static-list-of-todos-js\src\api\users.json'

export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
