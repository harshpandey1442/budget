import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    Title: '',
    Amount: '',
    Date: '',
  });
const titleChange = (event) => {

      setUserInput({
      ...userInput,
      Title: event.target.value,
      
    })
  };

  const amountChange = (event) => {
    setUserInput({
      ...userInput,
      Amount: event.target.value,
    });
  };

  const dateChange = (event) => {
    setUserInput({
      ...userInput,
      Date: event.target.value,
    });
  };
  const submit = (event)=>{

    event.preventDefault()
    const expenseData={
      title : userInput.Title,
      amount:+userInput.Amount,
      date:new Date(userInput.Date)
    }


    console.log("Expenseform",expenseData)
  props.SaveExpenseData(expenseData)

   setUserInput({
    Title: '',
    Amount: '',
    Date: '',
  })
}
return (
    <form onSubmit={submit}>
      <div className='expense__controls'>
        <div className='expense__control'>
          <label>Title</label>
          <div className='txt'>
          <input type='text' onChange={titleChange}
          value={userInput.Title}
          />
          </div>
        </div>
        <div className='expense__control'>
          <label>Amount</label>
          <div className='txt'>
          <input
            type='number'
            onChange={amountChange}
            value={userInput.Amount}
          />
          </div>
        </div>
        <div className='expense__control'>
          <label>Date</label>
          <div className='txt'>
          <input
            type='date'
            onChange={dateChange}
            value={userInput.Date}
          />
          </div>
        </div>
      </div>
      <div className='expense_btn'>
      <div className='txt'>
        <button type='submit'>Add New Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
