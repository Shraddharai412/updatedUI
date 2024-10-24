import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './PolicySection.module.css';
import CryptoJS from 'crypto-js';

const secretKey = 'your-secret-key';

const PolicySection = () => {
  const [healthPolicies, setHealthPolicies] = useState([]);
  const [lifePolicies, setLifePolicies] = useState([]);
  const [motorPolicies, setMotorPolicies] = useState([]);
  const [travelPolicies, setTravelPolicies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('health'); // State to manage active tab

  const userId = localStorage.getItem('userId') || 8; // Assuming userId = 8
  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');

  const decryptData = (encryptedData) => {
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  };

  const decryptedPassword = decryptData(password);

  useEffect(() => {
    const fetchPolicies = async (policyType) => {
      try {
        const response = await axios.get(`http://localhost:8081/api/${policyType}/user/${userId}`, {
          headers: {
            'Authorization': 'Basic ' + btoa(`${username}:${decryptedPassword}`)
          }
        });
        return response.data;
      } catch (error) {
        setError(`Error fetching ${policyType} policies. Please try again later.`);
        return [];
      }
    };

    const fetchAllPolicies = async () => {
      setLoading(true);
      const [health, life, motor, travel] = await Promise.all([
        fetchPolicies('healthpolicies'),
        fetchPolicies('lifeinsurance'),
        fetchPolicies('motorinsurances'),
        fetchPolicies('travelinsurances'),
      ]);
      setHealthPolicies(health);
      setLifePolicies(life);
      setMotorPolicies(motor);
      setTravelPolicies(travel);
      setLoading(false);
    };

    fetchAllPolicies();
  }, [userId]);

  const renderPolicies = (policies, type) => {
    if (policies.length === 0) return <p>No {type} policies found.</p>;

    return policies.map(policy => (
      <div className={styles.policyCard} key={policy.policyNumber}>
        <div className={styles.policyInfo}>
          <span>Policy Number: {policy.policyNumber}</span>
          <span>Policy Name: {type.charAt(0).toUpperCase() + type.slice(1)} Insurance</span>
          <span>Premium Amount: ${policy.premiumAmount}</span>
          <span>Coverage Amount: ${policy.coverageAmount}</span>
          {type === 'health' && (
            <>
              <span>Next Payment Due: {policy.endDate}</span>
              <span>Claim Limit: ${policy.claimLimit}</span>
            </>
          )}
          {type === 'life' && (
            <>
              <span>Beneficiary: {policy.beneficiaryDetails}</span>
              <span>Sum Assured: ${policy.sumAssured}</span>
            </>
          )}
          {type === 'motor' && (
            <>
              <span>Vehicle: {policy.vehicleMake} {policy.vehicleModel}</span>
              <span>Registration Number: {policy.vehicleRegistrationNumber}</span>
            </>
          )}
          {type === 'travel' && (
            <>
              <span>Start Date: {policy.startDate}</span>
              <span>End Date: {policy.endDate}</span>
            </>
          )}
        </div>
        <div className={styles.policyActions}>
          <button className={styles.actionBtn}>Update</button>
          <button className={styles.actionBtn}>Claim</button>
        </div>
      </div>
    ));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  return (
    <section className={styles.policySection}>
      <h2 className={styles.totalPolicies}>Your Policies</h2>
      <div className={styles.tabContainer}>
        <button
          className={`${styles.tabButton} ${activeTab === 'health' ? styles.active : ''}`}
          onClick={() => setActiveTab('health')}
        >
          Health
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'life' ? styles.active : ''}`}
          onClick={() => setActiveTab('life')}
        >
          Life
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'motor' ? styles.active : ''}`}
          onClick={() => setActiveTab('motor')}
        >
          Motor
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'travel' ? styles.active : ''}`}
          onClick={() => setActiveTab('travel')}
        >
          Travel
        </button>
      </div>
      <div className={styles.tabContent}>
        {activeTab === 'health' && renderPolicies(healthPolicies, 'health')}
        {activeTab === 'life' && renderPolicies(lifePolicies, 'life')}
        {activeTab === 'motor' && renderPolicies(motorPolicies, 'motor')}
        {activeTab === 'travel' && renderPolicies(travelPolicies, 'travel')}
      </div>
    </section>
  );
};

export default PolicySection;
