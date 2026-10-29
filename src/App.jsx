import { useEffect, useState } from "react";
import UserList from './UserList'
import { NavLink, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import UserAdd from './UserAdd'
import UserUpdate from './UserUpdate'

function App() {
  return (
    <>
      <ul className="flex w-full bg-pink-400 justify-around p-4">
        <NavLink to="/users">
          <li>Users</li>
        </NavLink>
        <NavLink to="/addUser">
          <li>Add User</li>
        </NavLink>
      </ul>

      <Routes>
        <Route path="/" element={<Navigate to="/users" replace />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/addUser" element={<UserAdd />} />
        <Route path="/users/edit/:id" element={<UserUpdate />} />
      </Routes>
    </>
  )
}

export default App