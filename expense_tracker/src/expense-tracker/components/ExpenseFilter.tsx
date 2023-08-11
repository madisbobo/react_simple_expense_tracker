interface Props {
  selectedCategory: (category: string) => void;
}

const ExpenseFilter = ({ selectedCategory }: Props) => {
  return (
    <select
      className="form-select mb-3"
      onChange={(event) => selectedCategory(event.target.value)}
    >
      <option defaultValue="All Categories">All Categories</option>
      <option value="Groceries">Groceries</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
};

export default ExpenseFilter;
