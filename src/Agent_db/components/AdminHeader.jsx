import  { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes if you're not using TypeScript
import styles from '../styles/AdminHeader.module.css'; 
import logo from '../assets/nobglogo.png'; 
import profilePic from '../assets/profile.jpg';

const AdminHeader = ({ onLogout }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className={styles.header}>
            <img src={logo} alt="MassMutual Logo" className={styles.logo} />
            <nav className={styles.nav}>
                <ul className={styles.navLinks}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Plans</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div className={styles.profile}>
                <img
                    src={profilePic}
                    alt="Profile"
                    className={styles.profilePic}
                    onClick={toggleDropdown}
                />
                {isDropdownOpen && (
                    <div className={styles.dropdown}>
                        <ul>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Settings</a></li>
                            <li><a href="#" onClick={onLogout}>Log Out</a></li> {/* Use the onLogout prop */}
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

// Add PropTypes to validate that onLogout is a function
AdminHeader.propTypes = {
    onLogout: PropTypes.func.isRequired
};

export default AdminHeader;
