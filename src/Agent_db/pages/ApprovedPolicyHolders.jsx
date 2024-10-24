

import globalStyles from '../styles/global.module.css';

const ApprovedPolicyHolders = () => {
  const approvedPolicyHolders = [
    { id: 1, name: "John Doe", policy: "Life Insurance" },
    { id: 2, name: "Jane Smith", policy: "Health Insurance" },
    { id: 3, name: "Alice Johnson", policy: "Car Insurance" },
    { id: 4, name: "Bob Brown", policy: "Home Insurance" },
  ];

  return (
    <div className={globalStyles.container}>
  <h1>Approved Policy Holders</h1>
    <table className={globalStyles.table}>
      
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Policy</th>
          </tr>
        </thead>
        <tbody>
          {approvedPolicyHolders.map(holder => (
            <tr key={holder.id}>
              <td>{holder.id}</td>
              <td>{holder.name}</td>
              <td>{holder.policy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovedPolicyHolders;
