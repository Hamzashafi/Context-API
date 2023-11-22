import React from 'react'
import Profile from '../../components/Profile'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const logoutHandler = () => {
    localStorage.removeItem('username')
    navigate('/')
  }
  return (
    <div>
        <h1>React Context API</h1>
        
        <Profile/>
        <button onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default Home