// import React from "react";

// function Register() {
//   return (
//     <div>
//       <h1>This is the Register Page</h1>
//     </div>
//   );
// }

// export default Register;
import React, { useState } from "react";

function RegistrationPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match");
    } else {
      // Register the user using an API call or other method
      console.log("Registration successful");
    }
  };

  return (
    <div className="registration-page">
      <h1>Register</h1>
      <form onSubmit={handleRegistration}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <button type="submit">Register</button>
        {errorMsg && <p>{errorMsg}</p>}
      </form>
    </div>
  );
}

export default RegistrationPage;
