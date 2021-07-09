import './login.scss';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="email" placeholder="example@example.com" />

        <label>Password</label>
        <input type="password" placeholder="*********" />

        <button className="loginButton">Login</button>
      </form>
      <button className="registerButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
};

export default Login;
