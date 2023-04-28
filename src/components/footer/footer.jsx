import React from "react";
import styles from "./footer.module.css"

function Footer() {
  return (
    <div>
      <div className={styles.Footer} >
        <div className={styles.TextBottom}>
        <div>
          <h1>Don’t miss what’s happening</h1>
          </div>
          <div>
          <h3>People on Twitter are the first to know.</h3>
        </div>
        </div >
        <div className={styles.BottomBtn}>
        <button className={styles.LogIn}>Log in</button>
        <button className={styles.SignUp}>Sign up</button>
        </div>
        
      </div>
    
    </div>
  );
}

export default Footer;
