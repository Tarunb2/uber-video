import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CaptainSignup = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')


    const [vehicleColor, setVehicleColor] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleType, setVehicleType] = useState('')

    const { captain, setCaptain } = React.useContext(CaptainDataContext)

    

    const  submitHandler = async (e) => {
        e.preventDefault()

        const captainData = {

            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType
            }
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

        if (response.status === 201) {
            const data = response.data

            setCaptain(data.captain)

            localStorage.setItem('token', data.token)
            navigate('/captain-home')
        }
        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
        setVehicleColor('')
        setVehiclePlate('')
        setVehicleCapacity('')
        setVehicleType('')

    }
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
            <img className=' -ml-2 mb-2 h-28 -mt-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
                <form onSubmit={(e) => submitHandler(e)}>
                    <h3 className='text-lg font-medium mb-2'>What's our  Captain's name</h3>
                    <div className='flex gap-4 mb-4'>
                        <input required value={firstName} onChange={(e) => setFirstName(e.target.value)} className='bg-[#eeeeee] rounded px-4 py-2 border border-gray-400 w-1/2 text-base placeholder:text-sm' type="text" placeholder='First name' />
                        <input required value={lastName} onChange={(e) => setLastName(e.target.value)} className='bg-[#eeeeee] rounded px-4 py-2 border border-gray-400 w-1/2 text-base placeholder:text-sm' type="text" placeholder='Last name' />
                    </div>

                    <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>
                    <input required value={email} onChange={(e) => setEmail(e.target.value)} className='bg-[#eeeeee] mb-4 rounded px-4 py-2 border border-gray-400 w-full text-base placeholder:text-sm' type="email" placeholder='email@example.com' />
                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                    <input required value={password} onChange={(e) => setPassword(e.target.value)} className='bg-[#eeeeee] mb-4 rounded px-4 py-2 border border-gray-400 w-full text-base placeholder:text-sm' type="password" placeholder='password' />



                    <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
                    <div className='flex gap-4 mb-4'>
                        <input required value={vehicleColor} onChange={(e) => setVehicleColor(e.target.value)} className='bg-[#eeeeee] rounded px-4 py-2 border border-gray-400 w-1/2 text-base placeholder:text-sm' type="text" placeholder='Vehicle Color' />
                        <input required value={vehiclePlate} onChange={(e) => setVehiclePlate(e.target.value)} className='bg-[#eeeeee] rounded px-4 py-2 border border-gray-400 w-1/2 text-base placeholder:text-sm' type="text" placeholder='Vehicle Plate' />
                    </div>
                    <div className='flex gap-4 mb-4'>
                        <input required value={vehicleCapacity} onChange={(e) => setVehicleCapacity(e.target.value)} className='bg-[#eeeeee] rounded px-4 py-2 border border-gray-400 w-1/2 text-base placeholder:text-sm' type="number" placeholder='Vehicle Capacity' />
                        <select required value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} className='bg-[#eeeeee] rounded px-4 py-2 border border-gray-400 w-1/2 text-base placeholder:text-sm'>
                            <option value="" disabled>Select Vehicle Type</option>
                            <option value="car">car</option>
                            <option value="motorcycle">motorcycle</option>
                            <option value="bicycle">bicycle</option>
                        </select>
                    </div>




                    <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Create Captain account</button>

                </form>
                <p className='text-center'>Already have a Accout? <Link to='/captain-login' className='text-green-700 font-medium'>Login here</Link></p>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default CaptainSignup
