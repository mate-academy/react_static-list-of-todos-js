import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  const { name } = user;

  return (
    <a className="UserInfo" href={`mailto:${name}`}>
      {name}
    </a>
  );
};
