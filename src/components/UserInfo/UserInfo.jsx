import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  const { id, name, email } = user;

  return (
    <a key={id} className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
