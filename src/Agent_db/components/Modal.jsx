
import PropTypes from 'prop-types'; // Import PropTypes to validate props (if not using TypeScript)
import styles from '../styles/Modal.module.css';

const Modal = ({ show, title, message, onConfirm, onCancel }) => {
  // If the `show` prop is false, do not render the modal
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>{title}</h2>
        <p>{message}</p>
        <div className={styles.actions}>
          <button onClick={onConfirm} className={styles.confirmButton}>Confirm</button>
          <button onClick={onCancel} className={styles.cancelButton}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

// Add PropTypes to validate the props
Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default Modal;
