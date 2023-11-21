import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    /* UserContext.Provider(Another way to writing this syntax) */
    <UserContextProvider>  
     <h1>React Context API</h1>
    </UserContextProvider>
  )
}

export default App
