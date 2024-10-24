
import globalStyles from '../styles/global.module.css';

const DisapprovedPolicyHolders = () => {
  const disapprovedPolicyHolders = [
    { id: 1, name: "Chris Evans", policy: "Health Insurance" },
    { id: 2, name: "Natalie Portman", policy: "Life Insurance" },
    { id: 3, name: "Chris Hemsworth", policy: "Car Insurance" },
    { id: 4, name: "Tom Holland", policy: "Home Insurance" },
  ];

  return (
   
      <div className={globalStyles.container}>
      <h1>Disapproved Policy Holders</h1>
      <table className={globalStyles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Policy</th>
          </tr>
        </thead>
        <tbody>
          {disapprovedPolicyHolders.map(holder => (
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

export default DisapprovedPolicyHolders;
