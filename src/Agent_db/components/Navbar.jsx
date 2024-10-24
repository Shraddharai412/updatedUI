import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import logo from '../assets/nobglogo.png';

const Navbar = ({ onLogout }) => {
  return (
    <nav className={styles.navbar} aria-label="Primary Navigation">
      {/* Logo Section */}
      <div className={styles.logoContainer}>
        <img src={logo} alt="MassMutual Logo" className={styles.logo} />
        <NavLink to="/dashboard" aria-label="Navigate to Dashboard" className={styles.logoLink}>
         {/* <center><h1>PolicyManager</h1></center>  */}
        </NavLink>
      </div>

      {/* Logout Button */}
      <div className={styles.logout}>
        <button
          className={styles.logoutButton}
          onClick={onLogout}
          aria-label="Logout"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

// Add PropTypes for validation
Navbar.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Navbar;
