import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className=' bg-[url(https://img.freepik.com/premium-photo/modern-traffic-light-showing-green-color_153437-2517.jpg?w=360)] h-screen pt-8 w-full flex justify-between flex-col'>
        <img className=' w-24 ml-8 h-9' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='text-3xl font-bold '>Get Started with Uber</h2>
            <Link to='/login' className=' flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>

      </div>
    </div>
  )
}

export default Home