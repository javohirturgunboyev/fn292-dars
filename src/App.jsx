import React from 'react'
import './App.css'
import data from './assets/data.json'
import UserList from './components/UserList'

function App() {
  return (
    <div className='container'>
      <h2>User List</h2>
      <UserList users={data}></UserList>
    </div>
  )
}

export default App
