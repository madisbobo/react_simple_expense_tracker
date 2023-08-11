import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

const App = () => {
  const [expenses, setExpense] = useState([
    {
      id: 0,
      description: "Milk",
      amount: 5.0,
      category: "Groceries",
    },
    {
      id: 1,
      description: "Electricity",
      amount: 100.55,
      category: "Utilities",
    },
  ]);

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseList
        expenses={expenses}
        onDelete={(id: number) =>
          setExpense(expenses.filter((_, i) => i !== id))
        }
      />
    </div>
  );
};

export default App;
