import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

function Contact() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)

  return (
    <>
        <div className="min-h-screen mt-20 flex items-center ">
        <button className="btn" onClick={()=>document.getElementById('my_modal').showModal()}>open modal</button>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog  id="my_modal" className="modal">

  <div className="modal-box">

    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
  
    <h3 className="font-bold text-lg">Contact</h3>
    <br /><span>Name</span><br />
    <input type="text" placeholder="Enter your Name" 
    {...register("text", { required: true })}/>
    <br />{errors.text && <span className="text-sm text-red-500">This field is required</span>}


    <br /><span>Email</span><br />
    <input type="email" placeholder="Enter your Email"
    {...register("email", { required: true })}/>
    <br />{errors.email && <span className="text-sm text-red-500">This field is required</span>}

    
    
    <br /><span>Message</span><br />
    <textarea cols="40" rows="5"
    {...register("text", { required: true })}/>
    <br />{errors.text && <span className="text-sm text-red-500">This field is required</span>}


    <button className="bg-pink-500 text-white px-3 py-2 border rounded-lg hover:bg-pink-700 duration-300">Submit</button>
    </form>
    </div>
</dialog>

        </div>
    </>
  )
}

export default Contact
