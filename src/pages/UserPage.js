import React from 'react';
import UserForm from '../components/Users/UserForm';
import UserList from '../components/Users/UserList';

const UserPage = () => {
  return (
    <div>
      <UserForm /> 
      <UserList /> 
    </div>
  );
}

export default UserPage;
