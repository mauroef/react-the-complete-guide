import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  // Memorize: use function form if state update depends on the previous state
  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    const date = new Date(userInput.enteredDate);
    event.preventDefault();
    props.onSaveExpenseData({
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      // To normalize the date and eliminate the unwanted offset
      date: new Date(date.getTime() - date.getTimezoneOffset() * -60000),
    });
    // clear inputs
    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            onChange={titleChangeHandler}
            value={userInput.enteredTitle}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            min='0.01'
            onChange={amountChangeHandler}
            step='0.01'
            type='number'
            value={userInput.enteredAmount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            max='2023-12-31'
            min='2019-01-01'
            onChange={dateChangeHandler}
            type='date'
            value={userInput.enteredDate}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
