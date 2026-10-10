function UserCard({ name, role, email }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Role: {role}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default UserCard;