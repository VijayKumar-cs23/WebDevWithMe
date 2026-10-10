import Button from "./components/Button";
import UserCard from "./components/UserCard";

function App() {
  const handleLogin = () => {
    alert("Login clicked");
  };

  return (
    <div>
      <h1>Component Reusability</h1>

      <UserCard
        name="Vijay"
        role="Java Full Stack Developer"
        email="vijay@gmail.com"
      />

      <UserCard
        name="Rahul"
        role="React Developer"
        email="rahul@gmail.com"
      />

      <UserCard
        name="Aman"
        role="Backend Developer"
        email="aman@gmail.com"
      />

      <Button text="Login" onClick={handleLogin} />
      <Button text="Register" />
      <Button text="Logout" />
    </div>
  );
}

export default App;