import categories from "../categories";

interface Props {
  selectedCategory: (category: string) => void;
}

const ExpenseFilter = ({ selectedCategory }: Props) => {
  return (
    <select
      className="form-select mb-3"
      onChange={(event) => selectedCategory(event.target.value)}
      defaultValue="All Categories"
    >
      <option value="All Categories">All Categories</option>
      {categories.map((category) => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
