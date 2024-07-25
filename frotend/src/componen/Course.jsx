import React, { useEffect, useState } from 'react'
// import list from "../../public/list.json"
import Cards from './Cards';
import { Link } from 'react-router-dom'
import axios from  "axios"


const Course = () => {

  const [book,setBook] = useState([])

  useEffect(() =>{
    const getBook = async()=>{
      try {
    const res =  await axios.get("http://localhost:4000/book");
    console.log(res.data)
    setBook(res.data)
      } catch (error) {
         console.log(error);
      }
    }
    getBook();
  },[])
  return (
   <>
    <div className='bg-white dark:bg-slate-900 dark:text-white'>
       <div className='flex flex-col dark:bg-slate-900 dark:text-white'>
       <h1 className='text-3xl text-black dark:bg-slate-900 dark:text-white font-semibold md:text-4xl mt-32 mx-auto text-center'>We are delighted to have you <span className='text-pink-500'>Here!!!</span></h1>

       <p className='mt-10 dark:bg-slate-900 dark:text-white text-center mx-auto text-black font-medium w-[70vw]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores reprehenderit, repellendus incidunt praesentium non ut fugiat? 
     Unde illum explicabo tempore, labore quod soluta nesciunt id quia laboriosam corrupti quibusdam quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit 
     molestiae sint ab ratione, quod blanditiis. Eligendi, eos? Iusto, quis beatae! Iusto fugiat ad alias aut est nesciunt rerum error vero.</p>


<Link to="/" className='mx-auto'>
<button className='px-6 py-2 bg-pink-600 rounded-md font-semibold text-white mt-8 w-20 '>Back</button>

</Link>
       </div>

       <div className=' mt-12 grid  px-6 grid-cols-1 md:grid-cols-4'>
       {book.map((item) => (
     <Cards key={item.id} item={item}/>
  ))}
       </div> 
    </div>
   </>
  )
}

export default Course


{/* <div className='max-w-2xl container md:px-20 px-4 my-0 bg-green-300 flex flex-col justify-center items-center'>
<div className='flex flex-col justify-center items-center w-full'>
   <h1 className='text-3xl text-black font-semibold md:text-4xl mt-32 mx-auto text-center'>We are delighted to have you <span className='text-pink-500'>Here!!!</span></h1>

   <p className='mt-10 text-center text-black font-medium w-[70vw]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores reprehenderit, repellendus incidunt praesentium non ut fugiat? 
     Unde illum explicabo tempore, labore quod soluta nesciunt id quia laboriosam corrupti quibusdam quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit 
     molestiae sint ab ratione, quod blanditiis. Eligendi, eos? Iusto, quis beatae! Iusto fugiat ad alias aut est nesciunt rerum error vero.</p>

     <button className='px-6 py-2 bg-pink-600 rounded-md font-semibold text-white mt-10'>Back</button>
</div>
<div className='mt-12 grid grid-cols-1 md:grid-cols-4 w-[80vw]  bg-pink-500'>
  {list.map((item) => (
     <Cards key={item.id} item={item}/>
  ))}
</div>
</div> */}