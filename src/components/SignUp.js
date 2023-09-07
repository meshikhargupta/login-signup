import React from "react";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { fbLogin } from "../services/fbAuth";

const SignUp = ({ onClick }) => {
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
      <div className="left-box">
        <h2>Welcome Back!</h2>
        <p>
          To keep connected with us please <br /> login with your personal info
        </p>
        <button onClick={onClick}>SIGN IN</button>
      </div>

      <div className="right-box">
        <h2>Create Account</h2>
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
        <p>or use your email for registration:</p>

        <div className="input-section">
          <div className="input-box">
            <BsPerson />
            <input type="text" placeholder="Name" />
          </div>
          <div className="input-box">
            <AiOutlineMail />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-box">
            <AiOutlineLock />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <button>SIGN UP</button>
      </div>
    </div>
  );
};

export default SignUp;
