import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2020');

    const updateFilterYear = (year) => {
        console.log('in expenses');
        console.log(year);
        setFilterYear(year);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filterYear;
    })




  return (
      <div>
        <Card className="expenses">
            <ExpensesFilter selectedYear={filterYear} changeCallback={updateFilterYear}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
      </div>
  );
}

export default Expenses;
