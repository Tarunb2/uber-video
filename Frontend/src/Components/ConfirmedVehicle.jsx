import React from 'react'
import 'remixicon/fonts/remixicon.css'

const ConfirmedVehicle = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=> {props.setVehiclePanaelOpen(false)}}><i className="text-3xl text-gray-500 ri-arrow-down-wide-fill"></i></h5>
      <h3 className='text-2xl font-semibold mb-5' >Confirm your Ride</h3>

      <div className='flex justify-between flex-col items-center'>
      <img className='h-28' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png" alt="" />
      <div className='w-full'>
        <div className='flex items-center gap-5 p-3 borber-b-2 shadow-md'>
        <i className=" text-lg ri-map-pin-fill"></i>
        <div>
          <h3 className='text-lg font-medium'>562/11-A</h3>
          <p className='text-sm text-gray-500 -mt-1' >Kankariya Talab, Bhopal</p>
        </div>
        </div>
        <div className='flex items-center gap-5 p-3 borber-b-2 shadow-md'>
        <i className=" text-lg ri-map-pin-3-fill"></i>
        <div>
          <h3 className='text-lg font-medium'>562/11-A</h3>
          <p className='text-sm text-gray-500 -mt-1' >Kankariya Talab, Bhopal</p>
        </div>
        </div>
        <div className='flex items-center gap-5 p-3 borber-b-2 shadow-md'>
        <i className=" text-lg ri-money-rupee-circle-fill"></i>
        <div>
          <h3 className='text-lg font-medium'>₹193.20</h3>
          <p className='text-sm text-gray-500 -mt-1' >Cash Cash</p>
        </div>
        </div>
      </div>
      <button onClick={()=>{ 
      props.setvehicleFound(true)
      props.setConfirmRidePanel(false)

      }} className='mt-5 w-full bg-green-500 active:bg-green-900 text-white py-2 px-4 rounded'>
        Confirm Ride
      </button>
      </div>
    </div>
  )
}

export default ConfirmedVehicle
