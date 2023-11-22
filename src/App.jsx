import { RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import {router} from './routes/routes'

function App() {
  

  return (

    /* UserContext.Provider(Another way to writing this syntax) */
    <>
    <UserContextProvider>  
    <RouterProvider router={router} />
    </UserContextProvider>
     </>
  )
}

export default App
