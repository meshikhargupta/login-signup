import React from "react";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { fbLogin } from "../services/fbAuth";

const SignIn = ({ onClick }) => {
  const handleFbLogin = async () => {
    try {
      const result = await fbLogin();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-box">
      <div className="right-box">
        <h2>Sign in to Diprella</h2>
        <div className="social-icons">
          <div className="icon-box" onClick={handleFbLogin}>
            <FaFacebookF />
          </div>
          <div className="icon-box">
            <FaGooglePlusG fontSize={"20px"} />
          </div>
          <div className="icon-box">
            <FaLinkedinIn />
          </div>
        </div>
        <p>or use your email account:</p>

        <div className="input-section">
          <div className="input-box">
            <AiOutlineMail />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-box">
            <AiOutlineLock />
            <input type="password" placeholder="Password" />
          </div>
        </div>

        <p className="forgot-password">Forgot your password?</p>

        <button>SIGN IN</button>
      </div>

      <div className="left-box">
        <h2>Hello, Friend!</h2>
        <p>
          Enter your personal details <br /> and start journey with us
        </p>
        <button onClick={onClick}>SIGN UP</button>
      </div>
    </div>
  );
};

export default SignIn;
