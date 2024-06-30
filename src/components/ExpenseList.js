import React from 'react';
import '../styles/ExpenseList.css';  // Ensure this path is correct

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  return (
    <div className="expense-list">
      <h2>Expense List</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.timestamp} className="expense-item">
            <div className="expense-details">
              <p className="expense-description">{expense.description}</p>
              <p className="expense-amount">${expense.amount}</p>
              <p className="expense-date">{new Date(expense.timestamp).toLocaleDateString()}</p>
              <p className="expense-category">{expense.category}</p>
            </div>
            <button onClick={() => onDeleteExpense(expense.timestamp)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
