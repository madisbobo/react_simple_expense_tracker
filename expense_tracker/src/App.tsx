import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Milk",
      amount: 5.0,
      category: "Groceries",
    },
    {
      id: 2,
      description: "Electricity",
      amount: 100.55,
      category: "Utilities",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses =
    selectedCategory && selectedCategory !== "All Categories"
      ? expenses.filter((e) => e.category === selectedCategory)
      : expenses;

  return (
    <div>
      <h1 className="mb-5">Expense Tracker</h1>
      <ExpenseFilter
        selectedCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id: number) =>
          setExpenses(expenses.filter((e) => e.id !== id))
        }
      />
    </div>
  );
};

export default App;
