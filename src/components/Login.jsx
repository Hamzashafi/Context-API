import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";

function Login() {
  /* Making State for username and Password */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
  /* HandleSubmit Method */
  const handleSubmit = () => {

  }
  return (
    <div>
      <h2>Login</h2>
      <input type="text"
      /* Controlling/Govern the state */
      value={username}
      /* if something change in this field than this state will changes as well */
      onChange={(e) => setUsername(e.target.value) }
      placeholder="username" />
      <input type="text"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="password" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
