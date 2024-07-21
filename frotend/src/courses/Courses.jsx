import React from 'react'
// import Course from "../componen/Course"
import Navbar from '../componen/Navbar'
import Footer from '../componen/Footer'
import Course from '../componen/Course'

const courses = () => {
    // console.log(list)
  return (
   <>
  <div className='dark:bg-slate-900 dark:text-white'>
  <Navbar/>
   <div className='h-full bg-white '>
    <Course/>
   </div>
   <Footer/>
  </div>
   </>
  )
}

export default courses
