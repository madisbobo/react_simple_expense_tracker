import { useForm, FieldValues } from "react-hook-form";
import categories from "../categories";

export interface FormData {
  description: string;
  amount: number;
  category: string;
}

interface Props {
  onSubmit: (data: FormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const handleFormSubmit = (data: FormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description", { required: true, minLength: 3 })}
          type="text"
          className="form-control"
          id="description"
        />
        {errors.description?.type === "required" && (
          <p className="text-danger">Description required.</p>
        )}
        {errors.description?.type === "minLength" && (
          <p className="text-danger">
            Description should be at least 3 characters.
          </p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { required: true })}
          type="number"
          step="0.01"
          className="form-control"
          id="amount"
        />
        {errors.amount?.type === "required" && (
          <p className="text-danger">Amount required.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category", { required: true })}
          id="category"
          className="form-select"
          defaultValue=""
        >
          <option value="" disabled>
            Open this select menu
          </option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category?.type === "required" && (
          <p className="text-danger">Category required.</p>
        )}
      </div>
      <button type="submit" className="btn btn-outline-dark mb-5">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
