import { useState } from 'react';
import styles from '../styles/PolicyList.module.css';

const PolicyDetails = () => {
  const [policies, ] = useState([
    { id: 1, name: 'Active Policy 1', policyId: 'AP001', category: 'Health', price: '$200', expiry: '2025-12-31', status: 'active' },
    { id: 2, name: 'Active Policy 2', policyId: 'AP002', category: 'Health', price: '$300', expiry: '2025-12-25', status: 'active' },
    { id: 3, name: 'Active Policy 3', policyId: 'AP003', category: 'Health', price: '$400', expiry: '2025-12-30', status: 'active' },
    { id: 4, name: 'Inactive Policy 1', policyId: 'IP001', category: 'Life', price: '$150', expiry: '2025-11-20', status: 'inactive' },
    { id: 5, name: 'Inactive Policy 2', policyId: 'IP002', category: 'Life', price: '$250', expiry: '2025-10-10', status: 'inactive' },
  ]);

  const [filter, setFilter] = useState('active');
  const [showDelete, setShowDelete] = useState(null);

  const filteredPolicies = policies.filter(policy => policy.status === filter);

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2>Policies</h2>
      </div>
      <div className={styles.controls}>
        <div className={styles.tabs}>
          <button className={`${styles.tab} ${filter === 'active' ? styles.active : ''}`} onClick={() => setFilter('active')}>Active</button>
          <button className={`${styles.tab} ${filter === 'inactive' ? styles.inactive : ''}`} onClick={() => setFilter('inactive')}>Inactive</button>
        </div>
        <div className={styles.searchTypeTotal}>
          <input type="text" placeholder="Search" className={styles.searchInput} />
          <div className={styles.totalCount}>Total Count: {filteredPolicies.length}</div>
        </div>
      </div>
      <table className={styles.policiesTable}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Policy ID</th>
            <th>Category</th>
            <th>Price</th>
            <th>Expiry</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredPolicies.map((policy, index) => (
            <tr key={policy.id}>
              <td>{index + 1}</td>
              <td>{policy.name}</td>
              <td>{policy.policyId}</td>
              <td>{policy.category}</td>
              <td>{policy.price}</td>
              <td>{policy.expiry}</td>
              <td className={styles.actionCell}>
                <button className={`${styles.btn} ${styles.editBtn}`}>Edit</button>
                <button onClick={() => alert(`Deleting policy: ${policy.name}`)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PolicyDetails;
