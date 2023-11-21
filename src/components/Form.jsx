import React from 'react'

const Form = ({username,setUsername,password,setPassword,handleSubmit}) => {
  return (
    <div>
    <h2> Login </h2>
    <input type="text"

    /* Controlling/Govern the state */
    value={username}

    /* if something change in the field than the state will changes as well */
    onChange={(e) => setUsername(e.target.value) }

    placeholder="username" />
    {"  "}
    <input type="text"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="password" />
    {" "}
    <button onClick={handleSubmit}>Submit</button>
  </div>
  )
}

export default Form;