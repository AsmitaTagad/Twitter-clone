// import React from "react";
// import { FaTwitter } from "react-icons/fa";
// //  import { Button } from '@material-ui/core';
// import Styles from"./Front.module.css";

// function RegistrationPage() {
//   return (
//     <div className="registration-page">
//       <div className="header">
//         <FaTwitter className="twitter-icon" />
//         <h1>Join Twitter today</h1>
//       </div>
//       <div className="buttons">
//         <button className="signup-google">Sign up with Google</button>
//         <button className="signup-apple">Sign up with Apple</button>
//       </div>
//       <div className="or-container">
//         <hr className="or-line" />
//         <p className="or-text">or</p>
//         <hr className="or-line" />
//       </div>
//       <div className="create-account-container">
//         <button className="create-account">Create account</button>
        
//       </div>
//       <div >
//       <p>By signing up, you agree to the <a href="/">Terms of Service</a> <br></br>and <a href="/">Privacy Policy</a>, including <a href="/">Cookie Use</a></p>

//       </div>
//     </div>
//   );
// }

// export default RegistrationPage;///

// import React from "react";
// import { FaTwitter,FaGoogle,FaApple} from "react-icons/fa";
// import { Button } from "@mui/material";
// import styles from "./Front.module.css";
// import { Link } from "react-router-dom";

// function RegistrationPage() {
//   return (
    
//     <div className={styles.registrationPage}>
//       <div className={styles.header}>
//         <FaTwitter className={styles.twitterIcon} />
//         <h1>Join Twitter today</h1>
//       </div>
//       <div className={styles.buttons}>
//         <button className={styles.signupGoogle}>  Sign up with Google  </button>
//         <button className={styles.signupApple}> Sign up with Apple</button>
//       </div>
//       <div className={styles.orContainer}>
//         <hr className={styles.orLine} />
//         <p className={styles.orText}>or</p>
//         <hr className={styles.orLine} />
//       </div>
//       <div className={styles.createAccountContainer}>
//         <button className={styles.createAccount}>Create account</button>
//       </div>
//       <div className={styles.termsContainer}>
//         <p>
//         By signing up, you agree to the <a href="/">Terms of Service</a> <br></br>and <a href="/">Privacy Policy</a>, including <a href="/">Cookie Use</a>
//         </p>
//         <div className="login-container">
//         <p className={styles.loginText}> have an account already? <Link className={styles.spanlogin} to="/register">Log in</Link></p>
//          </div>
//       </div>
//     </div>
    
//   );
// }

// export default RegistrationPage;///////


// import React from "react";
// import { FaTwitter, FaGoogle, FaApple } from "react-icons/fa";
// import { Button } from "@mui/material";
// import styles from "./Front.module.css";
// import { Link } from "react-router-dom";

// function RegistrationPage() {
//   return (
//     <div className={styles.registrationPage}>
//       <div className={styles.header}>
//         <FaTwitter className={styles.twitterIcon} />
//         <h1>Join Twitter today</h1>
//       </div>
//       <div className={styles.buttons}>
//         <button className={styles.signupGoogle}>
//           <FaGoogle className={styles.GoogleIcon} />
//           Sign up with Google
//         </button>
//         <button className={styles.signupApple}>
//           <FaApple className={styles.appleIcon} />
//           Sign up with Apple
//         </button>
//       </div>
//       <div className={styles.orContainer}>
//         <hr className={styles.orLine} />
//         <p className={styles.orText}>or</p>
//         <hr className={styles.orLine} />
//       </div>
//       <div className={styles.createAccountContainer}>
//         <button className={styles.createAccount}>Create account</button>
//       </div>
//       <div className={styles.termsContainer}>
//         <p>
//           By signing up, you agree to the{" "}
//           <a href="/">Terms of Service</a> <br />
//           and <a href="/">Privacy Policy</a>, including{" "}
//           <a href="/">Cookie Use</a>
//         </p>
//         <div className="login-container">
//           <p className={styles.loginText}>
//             have an account already?{" "}
//             <Link className={styles.spanlogin} to="/register">
//               Log in
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RegistrationPage;









import React from "react";
import { FaTwitter, FaApple } from "react-icons/fa";
import { Button } from "@mui/material";
import styles from "./Front.module.css";
import { Link } from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import { GrClose } from "react-icons/gr";

function RegistrationPage() {
    const handleClose = () => {
        // Handle close button click
        console.log("Close button clicked");
      };

  const handleGoogleSignup = () => {
    // Redirect the user to Google
    window.location.href = "https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp";
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
        By signing up, you agree to the <a href="/">Terms of Service</a> <br></br>and <a href="/">Privacy Policy</a>, including <a href="/">Cookie Use</a>
          
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


















// import React from "react";
// import { FaTwitter } from "react-icons/fa";
// import { Button } from "@mui/material";
// import styles from "./Front.module.css";

// const RegistrationPage = () => {
//   return (
//     <div className={styles.registrationPage}>
//       <div className={styles.header}>
//         <FaTwitter className={styles.twitterIcon} />
//         <h1>Join Twitter today</h1>
//       </div>
//       <div className={styles.buttons}>
//         <Button
//           variant="contained"
//           color="primary"
//           className={styles.signupGoogle}
//           startIcon={<i className="fab fa-google" />}
//         >
//           Sign up with Google
//         </Button>
//         <Button
//           variant="contained"
//           color="primary"
//           className={styles.signupApple}
//           startIcon={<i className="fab fa-apple" />}
//         >
//           Sign up with Apple
//         </Button>
//       </div>
//       <div className={styles.orContainer}>
//         <hr className={styles.orLine} />
//         <p className={styles.orText}>or</p>
//         <hr className={styles.orLine} />
//       </div>
//       <div className={styles.createAccountContainer}>
//         <Button
//           variant="contained"
//           color="primary"
//           className={styles.createAccount}
//         >
//           Sign up
//         </Button>
//         <p className={styles.termsText}>
//           By signing up, you agree to the{" "}
//           <a href="/">Terms of Service</a> and{" "}
//           <a href="/">Privacy Policy</a>, including{" "}
//           <a href="/">Cookie Use</a>.
//         </p>
//       </div>
//       <div className={styles.loginContainer}>
//         <p className={styles.loginText}>Already have an account?</p>
//         <Button
//           variant="outlined"
//           color="primary"
//           className={styles.loginButton}
//         >
//           Log in
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default RegistrationPage;

// export default RegistrationPage;
// import React from "react";
// import { FaTwitter } from "react-icons/fa";
// import { Button } from " @mui/material @emotion/react @emotion/styled"
// import "./Fornt.css";

// const RegistrationPage = () => {
//   return (
//     <div className="registrationPage">
//       <div className="header">
//         <FaTwitter className="twitterIcon" />
//         <h1>Join Twitter today</h1>
//       </div>
//       <div className="buttons">
//         <Button
//           variant="contained"
//           color="primary"
//           className="signupGoogle"
//           startIcon={<i className="fab fa-google" />}
//         >
//           Sign up with Google
//         </Button>
//         <Button
//           variant="contained"
//           color="primary"
//           className="signupApple"
//           startIcon={<i className="fab fa-apple" />}
//         >
//           Sign up with Apple
//         </Button>
//       </div>
//       <div className="orContainer">
//         <hr className="orLine" />
//         <p className="orText">or</p>
//         <hr className="orLine" />
//       </div>
//       <div className="createAccountContainer">
//         <Button
//           variant="contained"
//           color="primary"
//           className="createAccount"
//         >
//           Sign up
//         </Button>
//         <p className="terms-text">
//           By signing up, you agree to the{" "}
//           <a href="#">Terms of Service</a> and{" "}
//           <a href="#">Privacy Policy</a>, including{" "}
//           <a href="#">Cookie Use</a>.
//         </p>
//       </div>
//       <div className="loginContainer">
//         <p className="loginText">Already have an account?</p>
//         <Button
//           variant="outlined"
//           color="primary"
//           className="login-button"
//         >
//           Log in
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default RegistrationPage;