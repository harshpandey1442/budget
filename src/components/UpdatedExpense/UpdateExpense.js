import React from 'react';

import ExpenseForm from './ExpenseForm';
import './UpdateExpense.css';


const NewExpense = (props) => {
  
  const ExpenseDataHandler = (Expense)=>{

    const expenseData={
      ...Expense,
      id:Math.random().toString()

    }

    console.log("NewExpense",expenseData)
    props.AddExpense(expenseData)

  }
  return (
    <div className='new-expense'>
      <ExpenseForm SaveExpenseData={ExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
