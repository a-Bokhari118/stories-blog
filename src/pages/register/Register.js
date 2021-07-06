import './register.scss';

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input type="text" placeholder="example" />
        <label>Email</label>
        <input type="email" placeholder="example@example.com" />

        <label>Password</label>
        <input type="password" placeholder="*********" />

        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">Login</button>
    </div>
  );
};

export default Register;
