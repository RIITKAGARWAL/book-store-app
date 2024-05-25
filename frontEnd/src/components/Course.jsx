import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import { Link } from 'react-router-dom'

function Course() {
  return (
    <>
     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white dark:border ">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl   ">We are delighted to have you <span className="text-pink-500">Here! :)</span></h1>
        <p className="mt-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore ipsa unde quibusdam hic, quam atque quae laboriosam. Voluptatum doloribus accusamus error explicabo deserunt nihil sed culpa, delectus dolorem dolor.</p>
        
        <Link to="/">
        <button className="bg-pink-500 text-white px-4 py-2 border rounded-lg mt-6 hover:bg-pink-700 duration-300">back</button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          list.map((item)=>(
            <Cards key={item.id} item={item} />
          ))
        }
      </div>
     </div>
    </>
  )
}

export default Course
