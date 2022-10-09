import React, { useState } from 'react'
import { Link } from "react-router-dom";
import styles from './Navbar.module.css'
import Hamburger from 'hamburger-react'
import logo from "../../images/logo.png";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className={styles.nav}>
      <div className={styles.hambclass}>
        <Hamburger direction="right" toggled={navOpen} toggle={setNavOpen} size={24}/>
      </div>
      {
        navOpen ?
          <>
            <div className={styles.navLinks}>
              <div className={styles.first}>
                <Link to="/" className={styles.navLink}>Home</Link>
              </div>
              <div className={styles.second}>
                <Link to="/product" className={styles.navLink}>Products</Link>
              </div>
              <div className={styles.third}>
                <Link to="/about" className={styles.navLink}>About Us</Link>
              </div>
              <div className={styles.fourth}>
                <Link to="/contact" className={styles.navLink}>Contact Us</Link>
              </div>
              
            </div>
            <div className={styles.navLinksmobile}>
              <div className={styles.firstmobile} onClick={() => setNavOpen(false)}>
                <Link to="/" className={styles.navLinkmobile}>Home</Link>
              </div>
              <div className={styles.secondmobile} onClick={() => setNavOpen(false)}>
                <Link to="/product" className={styles.navLinkmobile}>Products</Link>
              </div>
              <div className={styles.thirdmobile} onClick={() => setNavOpen(false)}>
                <Link to="/about" className={styles.navLinkmobile}>About Us</Link>
              </div>
              <div className={styles.fourthmobile} onClick={() => setNavOpen(false)}>
                <Link to="/contact" className={styles.navLinkmobile}>Contact Us</Link>
              </div>
            </div>
          </> :
          <>
            <Link to='/'>
              <div className={styles.navLogo}><img src={logo} className={styles.img2} /></div>
            </Link>
            <div className={styles.navButton}><button className={styles.login}>Login</button></div>
          </>
      }
    </div>
  )
}

export default Navbar