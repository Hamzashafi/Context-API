/* Sending Data from this jsx file */

import React, {useState, useContext} from 'react';
import {useEffect} from 'react';
import UserContext from "../context/UserContext";
import Form from './form';
import { useNavigate } from 'react-router-dom';

function Login() {
const navigate = useNavigate()
  /* Making State for username and Password */

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  /* giving context of setUser to useContext */  
  const {setUser} = useContext(UserContext);
  /* Making HandleSubmit Method */
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password})
    localStorage.setItem("username", username);
    navigate('/home')
  }
  return (
    <Form
    username={username} 
    setUsername={setUsername}
    password={password}
    setPassword={setPassword}
    handleSubmit={handleSubmit} />
    
  )
    }
  

export default Login;
