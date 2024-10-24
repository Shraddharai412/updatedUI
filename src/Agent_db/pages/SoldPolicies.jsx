
import globalStyles from '../styles/global.module.css';
const SoldPolicies = () => {
  const soldPolicies = [
    { id: 1, policyName: "Life Insurance", holder: "John Doe" },
    { id: 2, policyName: "Health Insurance", holder: "Jane Smith" },
    { id: 3, policyName: "Car Insurance", holder: "Alice Johnson" },
    { id: 4, policyName: "Home Insurance", holder: "Bob Brown" },
  ];

  return (

      <div className={globalStyles.container}>
      <h1>Total Policies Sold</h1>
      <table className={globalStyles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Policy Name</th>
            <th>Policy Holder</th>
          </tr>
        </thead>
        <tbody>
          {soldPolicies.map(policy => (
            <tr key={policy.id}>
              <td>{policy.id}</td>
              <td>{policy.policyName}</td>
              <td>{policy.holder}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SoldPolicies;
