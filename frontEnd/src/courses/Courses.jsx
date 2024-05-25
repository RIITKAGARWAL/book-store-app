import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import list from '../../public/list.json'

function Courses() {
    console.log(list)
  return (
    <>
    <div>
      <Navbar />
        <div className="min-h-screen">
            <Course />
        </div>
      <Footer />


    </div>
    </>
  )
}

export default Courses
