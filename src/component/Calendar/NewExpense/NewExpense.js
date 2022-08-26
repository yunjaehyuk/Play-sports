import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDateHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString,
    };
    props.onAddExpense(expenseData)
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseHanlder={saveExpenseDateHandler}/>
    </div>
  );
};

export default NewExpense;