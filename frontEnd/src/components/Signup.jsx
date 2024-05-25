import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form'

function Signup() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
        <div>
        <div  className="flex h-screen items-center justify-center ">
        <div className="modal-box ">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link >
            
            <div className="">
                <h3 className="font-bold text-lg">Signup</h3>
                
                <div className="mt-4 space-y-2">
                <span >Name</span>
                <br />
                <input type="text" placeholder="Enter your name" className="px-3 py-1 w-80"
                {...register("name", { required: true })}/>
                <br />
                   {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
                
                </div>
               
                <div className="mt-4 space-y-2">
                <span >Email</span>
                <br />
                <input type="email" placeholder="Enter your email" className="px-3 py-1 w-80"
                {...register("email", { required: true })}/>
                <br />
                   {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
                
                </div>

                <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input type="password" placeholder="Enter your password"  className="px-3 py-1 w-80"
                {...register("password", { required: true })}/>
                   <br />
                   {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
            </div>
            <div className="flex justify-around mt-4">
                <button className="border rounded-lg text-white px-3 py-1 bg-pink-500 hover:bg-pink-700 duration-200">Signup</button>
                <p>have account? {""} 
                    <button className="text-blue-500 underline cursor-pointer"
                     onClick = {() => document.getElementById("my_modal_3").showModal()}>
                        Login</button>{""}<Login /></p>
            </div>
            </form>
        </div>
        </div>
        </div>
    </>
  )
}

export default Signup
