// Add the required props
// export const UserInfo = () => <>UserInfo markup</>;
import '../../api/users.json';

export const UserInfo = ({ user }) => (
  <div className="UserInfo">
    <p className="UserInfo__name" data-cy="user-name">
      {user.name}
    </p>

    <a
      className="UserInfo__email"
      data-cy="user-email"
      href={`mailto:${user.email}`}
    >
      {user.email}
    </a>
  </div>
);
