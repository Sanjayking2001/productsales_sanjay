import React from "react";

class MySite extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h2 className="Logo">Welcome, I'm SANJAY</h2>
          <nav className="navbar">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
            <button className="btnLogin-popup">Login</button>
          </nav>
        </header>
        <div className="wrapper active-popup">
          <span className="ion-icon">
            <ion-icon name="close"></ion-icon>
          </span>
          <div className="form-box login">
            <h2>Login Form</h2>
            <form action="#">
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="mail"></ion-icon>
                </span>
                <input type="email" required />
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="lock-closed"></ion-icon>
                </span>
                <input type="password" required />
                <label>Password</label>
              </div>
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" />
                  Remember Me
                </label>
                <a href="#">Forgot Password? </a>
              </div>
              <button type="submit" className="btn">
                Login
              </button>
              <div className="login-register">
                <p>
                  Don't have an account?{" "}
                  <a href="#" className="register-link">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
          <div className="form-box register">
            <h2>Register Form</h2>
            <form action="#">
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="person"></ion-icon>
                </span>
                <input type="text" required />
                <label>Username</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="mail"></ion-icon>
                </span>
                <input type="email" required />
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="lock-closed"></ion-icon>
                </span>
                <input type="password" required />
                <label>Password</label>
              </div>
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" />I agree to the terms & conditions
                </label>
              </div>
              <button type="submit" className="btn">
                Register
              </button>
              <div className="login-register">
                <p>
                  Already have an account?{" "}
                  <a href="#" className="login-link">
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default MySite;
