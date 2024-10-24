// src/pages/PolicyDetails.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../styles/PolicyDetails.module.css'; // Ensure this is correct

const PolicyDetails = () => {
  const { id } = useParams(); // Get the policy ID from the URL
  const navigate = useNavigate(); // Hook for navigation
  const [policy, setPolicy] = useState(null);

  useEffect(() => {
    // Simulated fetch for policy details using the id
    const fetchedPolicy = {
      id,
      name: 'Health Insurance',
      type: 'Health',
      coverage: 100000,
      duration: 5,
      description: 'A comprehensive health insurance plan covering major illnesses and hospitalizations.'
    };
    setPolicy(fetchedPolicy);
  }, [id]);

  return (
    <div className={styles.detailsContainer}> {/* Using CSS module styles */}
      {policy ? (
        <>
          <h2>{policy.name}</h2>
          <p><strong>Type:</strong> {policy.type}</p>
          <p><strong>Coverage:</strong> ${policy.coverage}</p>
          <p><strong>Duration:</strong> {policy.duration} years</p>
          <p><strong>Description:</strong> {policy.description}</p>
          <div className={styles.actions}>
            <button className={styles.editButton} onClick={() => navigate(`/edit-policy/${policy.id}`)}>Edit</button>
            <button className={styles.deleteButton}>Delete</button>
          </div>
        </>
      ) : (
        <p>Loading policy details...</p>
      )}
    </div>
  );
};

export default PolicyDetails;
