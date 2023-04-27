import React from "react";
import { FaTwitter, FaApple } from "react-icons/fa";
import { Button } from "@mui/material";
import styles from "./Front.module.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GrClose } from "react-icons/gr";

function RegistrationPage() {
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

  return (
    <div className={styles.fullcontainer}>
      <div className={styles.closeIconContainer} onClick={handleClose}>
        <GrClose className={styles.closeIcon} />
      </div>
      <div className={styles.registrationPage}>
        <div className={styles.header}>
          <FaTwitter className={styles.twitterIcon} />
          <h1>Join Twitter today</h1>
        </div>
        <div className={styles.buttons}>
          <button className={styles.signupGoogle} onClick={handleGoogleSignup}>
            <FcGoogle className={styles.googleIcon} />
            Sign up with Google
          </button>
          <button className={styles.signupApple} onClick={handleAppleSignup}>
            <FaApple className={styles.appleIcon} />
            Sign up with Apple
          </button>
        </div>
        <div className={styles.orContainer}>
          <hr className={styles.orLine} />
          <p className={styles.orText}>or </p>
          <hr className={styles.orLine} />
        </div>
        <div className={styles.createAccountContainer}>
          <button className={styles.createAccount}>Create account</button>
        </div>
        <div className={styles.termsContainer}>
          <p>
            By signing up, you agree to the <a href="/">Terms of Service</a>{" "}
            <br></br>and <a href="/">Privacy Policy</a>, including{" "}
            <a href="/">Cookie Use</a>
          </p>
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
  );
}

export default RegistrationPage;
