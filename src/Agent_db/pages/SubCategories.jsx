import globalStyles from '../styles/global.module.css';

const SubCategories = () => {
  const subCategories = [
    { id: 1, name: "Family Health", category: "Health" },
    { id: 2, name: "Term Life", category: "Life" },
    { id: 3, name: "Homeowners", category: "Property" },
    { id: 4, name: "Motorcycle", category: "Automobile" },
  ];

  return (
<div className={globalStyles.container}>
<h1>Sub-Categories</h1>
      <table className={globalStyles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Sub-Category Name</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {subCategories.map(sub => (
            <tr key={sub.id}>
              <td>{sub.id}</td>
              <td>{sub.name}</td>
              <td>{sub.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubCategories;
