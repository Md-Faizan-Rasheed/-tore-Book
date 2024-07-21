import React from 'react'
import book from "../../public/book.jpg"



const Banner = () => {
  return (
   <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col-reverse  md:flex-row'>
     <div className='md:w-1/2   my-20'>
       <div className='space-y-12'>
       <h1 className='font-bold text-4xl md:mt-12 mt-20'>Hello , welcomes here to learn something <span className='text-pink-600'>new everyday!!!</span></h1>
       <p className='text-xl font-normal'>Lorem ipsum dolor sit amet . Iures fugit magni sunt libero labore neque tempore in. Nostrum odio porro animi sed, unde eaque error sunt nobis consequuntur adipisci temporibus modi reiciendis blanditiis tempore architecto repellat et provident iste a in expedita? Quibusdam, magnam maxime!</p>
       <label className="input input-bordered flex items-center gap-2 bg-white">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow bg-white" placeholder="Email" />
</label>
 </div>
 <button className="btn mt-12 btn-secondary">Secondary</button>
     </div> 
     <div className='w-full md:w-1/2 my-20'>
          <img src={book} className='w-92  h-88' alt="pic"/>
     </div>
   </div>
   </>
  )
}

export default Banner
