import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = ({items}) => {
  return (
    <Card className='expenses'>
      {items.map((i) => (
        <ExpenseItem
          key={i.id}
          title={i.title}
          amount={i.amount}
          date={i.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
