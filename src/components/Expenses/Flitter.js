import React from 'react';
import './Flitter.css';

const Flitter = (props) => {
    const dropdown = (event) => {
        props.ExpenseFilter(event.target.value);
    };
  return (
    <div className='expense_filter'>
        <div className='filter_control'>
            <label>Filter by Year</label>
            <select value={props.selected} onChange={dropdown}>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
            </select>
        </div>
    </div>
  )
};
export default Flitter




