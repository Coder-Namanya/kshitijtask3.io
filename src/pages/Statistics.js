import React, { useEffect, useState } from 'react';
import '../styles/Statistics.css'; // Import your CSS file for styling


const Statistics = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Fetch expenses from localStorage on component mount
    const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(savedExpenses);
  }, []);

  // Calculate total expenses
  const totalExpenses = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);

  // Top 5 expenses sorted by cost (amount)
  const topExpenses = expenses
    .slice() // Create a copy of expenses array
    .sort((a, b) => parseFloat(b.amount) - parseFloat(a.amount)) // Sort by amount (descending)
    .slice(0, 5); // Take top 5 expenses

  // Function to calculate expenses per category
  const calculateExpensesPerCategory = (expenses) => {
    const categoryMap = {};
    expenses.forEach((expense) => {
      const category = expense.category;
      const amount = parseFloat(expense.amount);
      categoryMap[category] = (categoryMap[category] || 0) + amount;
    });
    return categoryMap;
  };

  // Calculate expenses per category
  const expensesPerCategory = calculateExpensesPerCategory(expenses);

  // Function to render bar graph dynamically
  const renderBarGraph = () => {
    const categories = Object.keys(expensesPerCategory);
    const amounts = Object.values(expensesPerCategory);

    const totalWidth = expenses.length > 0 ? 100 : 0;

    const bars = categories.map((category, index) => {
      const percentage = (amounts[index] / totalExpenses) * totalWidth;
      return (
        <div className="bar" key={category}>
          <div className="bar-title">{category}</div>
          <div className="bar-graph">
            <div className="bar-fill" style={{ width: `${percentage}%` }}></div>
          </div>
          <div className="bar-label">${amounts[index]}</div>
        </div>
      );
    });

    return bars;
  };

  return (
    <div className="statistics-container">
      <h1 className="statistics-title">Statistics</h1>
      <div className="statistics-row">
        <div className="statistics-box">
          <h2>Total Expenses</h2>
          <p>${totalExpenses.toFixed(2)}</p>
        </div>

        <div className="statistics-box">
          <h2>Top 5 Expenses</h2>
          <ul>
            {topExpenses.map((expense, index) => (
              <li key={index}>
                {expense.description} - ${expense.amount.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>

        <div className="statistics-box">
          <h2>Expenses Per Category</h2>
          <div className="expenses-categories">
            {Object.keys(expensesPerCategory).map((category, index) => (
              <div className="category-item" key={index}>
                <span className="category-name">{category.charAt(0).toUpperCase() + category.slice(1)}: </span>
                <span className="category-amount">${expensesPerCategory[category].toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bar-graph-container">
        <h2>Expense Distribution</h2>
        {renderBarGraph()}
      </div>
    </div>
  );
};

export default Statistics;
