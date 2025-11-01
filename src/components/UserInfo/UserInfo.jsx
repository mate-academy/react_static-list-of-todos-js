// Add the required props
export function UserInfo({ user: { name, email } }) {
  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
}
