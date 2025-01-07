import { useAuth } from "../context/AuthContext";

function Register() {
  const { user, setUser, token, setToken, isAuth, setIsAuth } = useAuth();

  return (
    <form>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="name" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Register;
