import { useState } from "react";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import { FieldValues } from "react-hook-form";

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

  const onSelect = (data: FieldValues) => {
    const submittedData = {
      id: expenses.length + 1,
      description: data.description,
      amount: parseFloat(data.amount),
      category: data.category,
    };
    setExpenses([...expenses, submittedData]);
  };

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses =
    selectedCategory && selectedCategory !== "All Categories"
      ? expenses.filter((e) => e.category === selectedCategory)
      : expenses;

  return (
    <div>
      <h1 className="text-center mb-5">Expense Tracker</h1>
      <h3 className="text-primary">Add Expenses</h3>
      <ExpenseForm onSubmit={onSelect} />
      <h3 className="text-primary">All Expenses</h3>
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
