import React, { useState } from 'react';
import '../styles/ExpenseForm.css';

const ExpenseForm = ({ onAddExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount && category) {
      const newExpense = {
        description,
        amount: parseFloat(amount),
        category,
        timestamp: Date.now(),
      };
      onAddExpense(newExpense);
      setDescription('');
      setAmount('');
      setCategory('');
    }
  };

  const isFormValid = description && amount && category;

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h2>Expense Form</h2>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Select Category</option>
        <option value="food">Food</option>
        <option value="transport">Transport</option>
        <option value="entertainment">Entertainment</option>
        <option value="health">Health</option>
        <option value="utilities">Utilities</option>
        <option value="miscellaneous">Miscellaneous</option>
      </select>
      <button type="submit" disabled={!isFormValid}>
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
