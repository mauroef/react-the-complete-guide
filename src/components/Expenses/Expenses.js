import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import { useState } from 'react';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items
        .filter((i) => i.date.getFullYear().toString() === filteredYear)
        .map((i) => (
          <ExpenseItem
            key={i.id}
            title={i.title}
            amount={i.amount}
            date={i.date}
          />
        ))}
    </Card>
  );
};

export default Expenses;
