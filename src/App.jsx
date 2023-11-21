import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (

    /* UserContext.Provider(Another way to writing this syntax) */
    <>
    <UserContextProvider>  
     <h1>React Context API</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
     </>
  )
}

export default App
