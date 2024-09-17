import './UserInfo.scss';

export function UserInfo({ user }) {
  const { name, email } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
}
