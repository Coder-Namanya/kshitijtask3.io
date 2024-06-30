import React, { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import '../styles/ExpenseForm.css';
import '../styles/ExpenseList.css';

const TrackExpenses = () => {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  const addExpense = (expense) => {
    const updatedExpenses = [...expenses, expense];
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  };

  const deleteExpense = (timestamp) => {
    const updatedExpenses = expenses.filter((expense) => expense.timestamp !== timestamp);
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  };

  const trackExpensesStyle = {
    padding: '30px',
    marginTop: '10px' /* To avoid overlapping with the fixed navbar */,
  };

  const h2Style = {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '4rem',
    color: 'orange',
  };

  return (
    <div className="track-expenses" style={trackExpensesStyle}>
      <h2 style={h2Style}>Track Expenses</h2>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
    </div>
  );
};

export default TrackExpenses;
