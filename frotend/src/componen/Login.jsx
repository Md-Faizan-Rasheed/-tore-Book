import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div className=''>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box flex flex-col gap-4 bg-white text-black">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>
                    <h3 className="font-bold text-2xl">Login</h3>
                    <form onSubmit={handleSubmit(onSubmit)} method='dialog'>
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
                            <label htmlFor="password" className='ml-4 text-xl font-semibold'>Password</label>
                            <input
                                type="password"
                                placeholder="......."
                                className="input input-ghost bg-white w-full max-w-xs text-xl font-bold"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className='text-red-600'>This field is required</span>}
                        </div>

                        <div className='mt-4 ml-4 flex flex-row justify-between'>
                            <button type='submit' className='bg-pink-600 px-3 py-2 font-semibold rounded-md text-xl'>Login</button>
                            <div className='mt-4 text-lg'>Not registered? <Link className='text-blue-500 underline' to="/signup">Signup</Link></div>

                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login
