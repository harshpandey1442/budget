import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'

const ExpenseList = props => {
  if (props.items.length === 0) {
      return <h2 className="expense-list">No expenses.</h2>
  }

  return <ul className="expense-list">
      {props.items.map((expense) => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    ))}
  </ul>
}

export default ExpenseList;