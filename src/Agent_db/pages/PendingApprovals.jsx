
import globalStyles from '../styles/global.module.css';

const PendingApprovals = () => {
  const pendingApprovals = [
    { id: 1, name: "Tom Hanks", policy: "Health Insurance" },
    { id: 2, name: "Emma Watson", policy: "Life Insurance" },
    { id: 3, name: "Robert Downey Jr.", policy: "Car Insurance" },
    { id: 4, name: "Scarlett Johansson", policy: "Home Insurance" },
  ];

  return (
   
      <div className={globalStyles.container}>
      <h1>Pending Approvals</h1>
      <table className={globalStyles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Policy</th>
          </tr>
        </thead>
        <tbody>
          {pendingApprovals.map(holder => (
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

export default PendingApprovals;
