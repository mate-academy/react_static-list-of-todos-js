export const UserInfo = ({ users }) => {
  return (
    <div className="UserInfo">
      {users.map(user => (
        <div key={user.id} className="UserInfo__item">
          <h2 className="UserInfo__name">{user.name}</h2>
        </div>
      ))}
    </div>
  );
};
