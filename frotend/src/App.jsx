import React from 'react'
import Home from './Home/Home'
import Courses from './courses/Courses'
import { Routes,Route, Navigate } from 'react-router-dom'
import Signup from './componen/Signup'
import Contact from './componen/Contact'
import toast , {Toaster} from "react-hot-toast"
import { useAuth } from './context/AuthProvider'

const App = () => {

  const [authUser,setAuthUser] = useAuth();
  console.log(authUser);

  return (
  <>

<div className='dark:bg-slate-900 dark:text-white'>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/courses" element={authUser ? <Courses /> : <Navigate to= "/signup"/>}/>
  <Route path="/signup"  element={<Signup/>} />
  <Route path="/contact" element={<Contact/>}/>
</Routes>
<Toaster/>
</div>
  </>
  )
}

export default App
