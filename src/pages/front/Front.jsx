import React, { useState } from "react";
import { FaTwitter, FaApple } from "react-icons/fa";
// import { Button } from "@mui/material";
import styles from "./Front.module.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import RegisterForm from "../../components/regiserform/RegisterForm";

function RegistrationPage() {
  const [isRegisterPage, setIsRegisterPage] = useState(false);

  const handleClose = () => {
    // Handle close button click
    console.log("Close button clicked");
  };

  const handleGoogleSignup = () => {
    // Redirect the user to Google
    window.location.href =
      "https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp";
  };

  const handleAppleSignup = () => {
    // Redirect the user to Apple
    window.location.href = "https://appleid.apple.com/account#!&page=create";
  };

  const handleTermsClick = (event) => {
    event.preventDefault();
    alert("Terms of Service clicked");
  };

  const handlePrivacyClick = (event) => {
    event.preventDefault();
    alert("Privacy Policy clicked");
  };

  const handleCookieClick = (event) => {
    event.preventDefault();
    alert("Cookie Use clicked");
  };

  if (!isRegisterPage) {
    return (
      <div className={styles.mainBody}>
        <div className={styles.fullcontainer}>
          {/* <div className={styles.closeIconContainer} onClick={handleClose}>
          <GrClose className={styles.closeIcon} size={15} />
        </div> */}
          <div className={styles.registrationPage}>
            <div className={styles.header}>
              <FaTwitter className={styles.twitterIcon} />
              <h1>Join Twitter today</h1>
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.signupGoogle}
                onClick={handleGoogleSignup}
              >
                <FcGoogle className={styles.googleIcon} />
                Sign up with Google
              </button>
              <button
                className={styles.signupApple}
                onClick={handleAppleSignup}
              >
                <FaApple className={styles.appleIcon} />
                Sign up with Apple
              </button>
            </div>
            <div className={styles.orContainer}>
              <span>
                _______________________<sub> or </sub>_____________________
              </span>
            </div>
            <div className={styles.createAccountContainer}>
              <button
                className={styles.createAccount}
                onClick={() => setIsRegisterPage(true)}
              >
                Create account
              </button>
            </div>
            <div className={styles.termsContainer}>
              <p>
                By signing up, you agree to the{" "}
                <a href="/" className={styles.blue} onClick={handleTermsClick}>
                  Terms of Service
                </a>
                <br />
                and
                <a
                  href="/"
                  className={styles.blue}
                  onClick={handlePrivacyClick}
                >
                  Privacy Policy
                </a>
                ,including
                <a href="/" className={styles.blue} onClick={handleCookieClick}>
                  Cookie Use
                </a>
              </p>
              {/* <p className={styles.loginText}>
            Have an account already?
            <Link className={styles.spanlogin} to="/login">
              Log in
            </Link>
          </p> */}
              <div className="login-container">
                <p className={styles.loginText}>
                  have an account already?{" "}
                  <Link className={styles.spanlogin} to="/register">
                    Log in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <RegisterForm />
      </div>
    );
  }
}

export default RegistrationPage;
