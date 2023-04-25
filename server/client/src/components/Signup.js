import React, { useState } from 'react'
//import signpic from "../image/signup.svg"
import signup2 from "../image/signup2.png"
import { NavLink } from "react-router-dom";
import { path } from '../path'
import axios from 'axios';

// const axios = require('axios');


const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pwd, setpwd] = useState("");
  const [cpwd, setcpwd] = useState("");

  const handleNameChange = (e) => {
    console.log("name : ",name)
    setname(e.target.value);
  }
  const handleEmailChange = (e) => {
    setemail(e.target.value);
  }
  const handlePwdChange = (e) => {
    setpwd(e.target.value);
  }
  const handlecPwdChange = (e) => {
    setcpwd(e.target.value);
  }
  const handleSubmit = async () => {
    console.log("handle submit")
    if (name.length && email.length && (pwd === cpwd)) {

      axios.post(`${path}/api/auth/signup`, {
        name: name,
        email: email,
        password: pwd
      })
        .then(function (response) {
          console.log("Res: ", response);
          if (response.status == 203) {
            // toast.error(response.data.msg);
          }
          else {
            localStorage.setItem('token', response.data.res);
            // setTimeout(() => {
            //   // navigate('/')
            // }, 2000);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    else {
      console.log("please fill all the details")
    }
    console.log("Handle submit ");
    console.log("Path ", path);

  }
  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              {/* <img src={signpic} alt="signup logo" /> */}
              {/* <form className="register-form" id="register-form"> */}
                <div className="form-group">
                  <label htmlFor="name">
                    <i class="material-icons-name"></i>
                  </label>
                  <input type="text" name="name" value={name} onChange={handleNameChange} id="name" autoComplete="off" placeholder="Name " />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="email" name="email" id="email" value={email} onChange={handleEmailChange} autoComplete="off" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name="password" id="password" value={pwd} onChange={handlePwdChange} autoComplete="off" placeholder="Your Password" />
                </div>

                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name="cpassword" id="cpassword" value={cpwd} onChange={handlecPwdChange} autoComplete="off" placeholder="Confirm Your Password" />
                </div>

                <div className="form-group form-button">
                <button  name="signup" onClick={handleSubmit} >Register</button>
                  {/* <input type="submit" name="signup" onSubmit={handleSubmit} id="signup" className="form-submit" value="register"/> */}
                </div>
              {/* </form> */}
            </div>
            <div className="signup-image">
              <figure>
                <NavLink to="/login" className="signup-image-link"><img src={signup2} alt="" />I am already register</NavLink>
              </figure>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Signup