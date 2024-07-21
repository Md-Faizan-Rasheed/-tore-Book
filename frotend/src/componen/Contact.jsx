import React from 'react'
import Navbar from './Navbar'
import { useForm } from 'react-hook-form'

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='bg-white h-screen'>
      <Navbar />
      <div className='bg-white flex items-center justify-center dark:bg-slate-800 dark:text-white h-screen w-screen'>
        <div className="modal-box flex flex-col gap-4 bg-white text-black dark:bg-slate-800 dark:text-white dark:shadow-white dark:shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-2xl">Contact Us</h3>

            <div className='flex flex-col mt-4 space-y-2'>
              <label htmlFor="name" className='ml-4 text-xl font-semibold'>Name</label>
              <input
                type="text"
                placeholder="Ms/Mr Name"
                className="input bg-white input-ghost w-full max-w-xs"
                {...register("name", { required: true })}
              />
              {errors.name && <span className='text-red-600'>This field is required</span>}
            </div>

            <div className='flex flex-col mt-4 space-y-2'>
              <label htmlFor="email" className='ml-4 text-xl font-semibold'>Email</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="input bg-white input-ghost w-full max-w-xs"
                {...register("email", { required: true })}
              />
              {errors.email && <span className='text-red-600'>This field is required</span>}
            </div>

            <div className='flex flex-col mt-4 space-y-2'>
              <label htmlFor="message" className='ml-4 text-xl font-semibold'>Message</label>
              <textarea
                placeholder="Your message..."
                className="textarea bg-white textarea-ghost w-full max-w-xs"
                {...register("message", { required: true })}
              />
              {errors.message && <span className='text-red-600'>This field is required</span>}
            </div>

            <div className='mt-4 ml-4 flex flex-row justify-between'>
              <button type='submit' className='bg-blue-600 px-3 py-2 font-semibold rounded-md text-xl text-white'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
