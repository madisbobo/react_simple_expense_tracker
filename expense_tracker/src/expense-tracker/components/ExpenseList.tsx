import { useState } from "react";
import styles from "./ExpenseList.module.css";

const ExpenseList = () => {
  const [items, setItem] = useState([
    {
      description: "Milk",
      amount: 5.0,
      category: "Groceries",
    },
    {
      description: "Electricity",
      amount: 100.0,
      category: "Utilities",
    },
  ]);

  return (
    <table className={`table table-hover ${styles.table}`}>
      <thead className="table-secondary">
        <tr>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <th scope="row">{item.description}</th>
            <td>{item.amount}</td>
            <td>{item.category}</td>
            <td>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => setItem(items.filter((_, i) => i !== index))}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
