import UserList from './UserList'
import { NavLink, Routes, Route } from 'react-router-dom'
import './App.css'
import UserAdd from './UserAdd'

function App() {
  return (
    <>
      <ul className="flex w-full bg-pink-400 justify-around">
        <NavLink to="/users">
          <li>Users</li>
        </NavLink>
        <NavLink to="/addUser">
          <li>Add User</li>
        </NavLink>
      </ul>

      <Routes>
        <Route path="/users" element={<UserList />} />
        <Route path="/addUser" element={<UserAdd />} />
      </Routes>
    </>
  )
}

export default App