import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (nameData, ageData) => {
    setUsersList((prevUsersList) => [
      ...prevUsersList,
      { name: nameData, age: ageData, id: Math.random().toString() },
    ]);
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
