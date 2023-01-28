import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' />
        <label htmlFor='agre'>Age (years)</label>
        <input id='agre' type='number' />
        <Button type='submit'>Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
