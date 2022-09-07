import React,{useState} from 'react';

import UpdatedExpense from './components/UpdatedExpense/UpdateExpense';

import Expenses from './components/Expenses/Expenses';
import './App.css';


// const App1 = () => {
  const Old_Expense = [
    {
      id: 'e1',
      title: 'Book',
      amount: 90,
      date: new Date(2019, 7, 14),
    },

    { 
      id: 'e2',
      title: 'TV', 
      amount: 10000, 
      date: new Date(2021, 8, 18) 
    },

    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 799,
      date: new Date(2022, 2, 20),
    },

    // {
    //   id: 'e4',
    //   title: 'Grocery',
    //   amount: 600,
    //   date: new Date(2020,7, 21),
    // },
  ];
  
  const App =() =>{
    const [expenses,setExpenses] = useState(Old_Expense);
    const addExpensehandler = (expense) =>{
    setExpenses((prevExpenses)=>{
        return[expense, ...prevExpenses]
      });
   };



  return (
    <div>
      
      <UpdatedExpense AddExpense={addExpensehandler}/>
      
      <Expenses items={expenses} />
    </div>
  );
  }
export default App
