import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import styles from '../styles/Login.module.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use navigate for redirecting after login

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Username and Password are required');
    } else {
      onLogin(username, password);
      navigate('/dashboard'); // Redirect to dashboard on successful login
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.title}>Agent Login</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
};

// Add PropTypes for validation
Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
