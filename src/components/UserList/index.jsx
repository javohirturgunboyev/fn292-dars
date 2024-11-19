import React from 'react';
import User from '../User';
import './index.css'

function UserList({ users }) {

  return (
    <div className='wrapper'>
      {
        users.length > 0 &&
        users.map((user, index) => (
          <User key={index} user={user} />
        ))
      }
    </div>
  );
}

export default UserList;
