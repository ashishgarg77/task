import React from 'react';
// import loginpic from "../image/login.svg";
//import {NavLink} from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="sign-in">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="signin-image">
              {/* <figure>
                <img src={loginpic} alt="Login pic" />
              </figure>
              <NavLink to="/signup" className="signup-image-link">Create an Account</NavLink> */}
            </div>
            <div className="signin-form">
              <h2 className="form-title">Log In</h2>
              {/* <img src={signpic} alt="signup logo" /> */}
              <form className="register-form" id="register-form">

                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="email" name="email" id="email" autoComplete="off" placeholder="Your Email" />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name="password" id="password" autoComplete="off" placeholder="Your Password" />
                </div>

                <div className="form-group form-button">
                  <input type="submit" name="signin" id="signin" className="form-submit" value="Log In"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Login