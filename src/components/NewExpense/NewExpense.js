import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [newExpenseForm, setNewExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    closeNewForm();
  };

  const closeNewForm = () => {
    setNewExpenseForm(false);
  };

  const openNewForm = () => {
    setNewExpenseForm(true);
  };

  let content;

  newExpenseForm ? content = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelForm={closeNewForm}/> : content = <button onClick={openNewForm}>Add new expense</button>;



  return (
    <div className='new-expense'>
      {content}
    </div>
  );
};

export default NewExpense;
