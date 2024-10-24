// src/pages/EditPolicy.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/EditPolicy.module.css';

const EditPolicy = () => {
  const { id } = useParams();
  const [policy, setPolicy] = useState(null);

  useEffect(() => {
    const fetchedPolicy = {
      id,
      name: 'Health Insurance',
      type: 'Health',
      coverage: 100000,
      duration: 5,
    };
    setPolicy(fetchedPolicy);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Policy updated:", policy);
  };

  return (
    <div className={styles.formContainer}>
      <h2>Edit Policy</h2>
      {policy && (
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            value={policy.name}
            onChange={(e) => setPolicy({ ...policy, name: e.target.value })}
            className={styles.input}
          />
          <select
            value={policy.type}
            onChange={(e) => setPolicy({ ...policy, type: e.target.value })}
            className={styles.input}
          >
            <option value="health">Health</option>
            <option value="life">Life</option>
            <option value="auto">Auto</option>
          </select>
          <input
            type="number"
            value={policy.coverage}
            onChange={(e) => setPolicy({ ...policy, coverage: e.target.value })}
            className={styles.input}
          />
          <input
            type="number"
            value={policy.duration}
            onChange={(e) => setPolicy({ ...policy, duration: e.target.value })}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>Save Changes</button>
        </form>
      )}
    </div>
  );
};

export default EditPolicy;
