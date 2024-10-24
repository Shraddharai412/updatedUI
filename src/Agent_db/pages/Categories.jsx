

import globalStyles from '../styles/global.module.css';

const Categories = () => {
  const categories = [
    { id: 1, name: "Health", description: "Health-related policies" },
    { id: 2, name: "Life", description: "Life insurance options" },
    { id: 3, name: "Property", description: "Coverage for properties" },
    { id: 4, name: "Automobile", description: "Car insurance policies" },
  ];

  return (
    <div className={globalStyles.container}>
      <h1>Policy Categories</h1>
      <table className={globalStyles.table}>

     
        <thead>
          <tr>
            <th>ID</th>
            <th>Category Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>{category.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Categories;
