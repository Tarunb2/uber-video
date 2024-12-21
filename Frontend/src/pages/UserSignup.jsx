import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        setUserData({
            email: email,
            password: password,
            fullName: {
                firstName: firstName,
                lastName: lastName
            }
        })
        console.log(userData)

        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')

    }
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className=' w-24 mb-10 h-9' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <form onSubmit={(e) => submitHandler(e)}>
                    <h3 className='text-lg font-medium mb-2'>What's your name</h3>
                    <div className='flex gap-4 mb-5'>
                        <input required value={firstName} onChange={(e) => setFirstName(e.target.value)} className='bg-[#eeeeee] rounded px-4 py-2 border border-gray-400 w-1/2 text-base placeholder:text-sm' type="text" placeholder='First name' />
                        <input required value={lastName} onChange={(e) => setLastName(e.target.value)} className='bg-[#eeeeee] rounded px-4 py-2 border border-gray-400 w-1/2 text-base placeholder:text-sm' type="text" placeholder='Last name' />
                    </div>

                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                    <input required value={email} onChange={(e) => setEmail(e.target.value)} className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border border-gray-400 w-full text-base placeholder:text-sm' type="email" placeholder='email@example.com' />
                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                    <input required value={password} onChange={(e) => setPassword(e.target.value)} className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border border-gray-400 w-full text-base placeholder:text-sm' type="password" placeholder='password' />
                    <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>

                </form>
                <p className='text-center'>Already have a Accout? <Link to='/login' className='text-green-700 font-medium'>Login here</Link></p>
            </div>
            <div>
                <p className='text-center text-sm text-gray-500 leading-tight'>
                    By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.
                </p>
            </div>
        </div>
    )
}

export default UserSignup
