import React from 'react'

const VehiclePanel = (props) => {
    return (
        <div>
            <h5 onClick={() => props.setVehiclePanelOpen(false)} className='p-3 text-center w-[93%] absolute -top-2 '><i className=" text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
            <div onClick={()=> props.setConfirmRidePanel(true)} className='flex border-2 shadow-md active:border-gray-800 mb-2 rounded-xl w-full p-3 items-center justify-between'>
                <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png" alt="" />
                <div className=' ml-2 w-1/2'>
                    <h4 className='font-medium text-lg'>UberGo <span><i className="ri-user-3-fill"></i> 4</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, Compact rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹193.20</h2>
            </div>
            <div onClick={()=> props.setConfirmRidePanel(true)} className='flex border-2 shadow-md active:border-gray-800 mb-2 rounded-xl w-full p-3 items-center justify-between'>
                <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                <div className=' ml-2 w-1/2'>
                    <h4 className='font-medium text-lg'>MotoGo <span><i className="ri-user-3-fill"></i> 1</span></h4>
                    <h5 className='font-medium text-sm'>3 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, Compact rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹65</h2>
            </div>
            <div onClick={()=> props.setConfirmRidePanel(true)} className='flex border-2 shadow-md active:border-gray-800 mb-2 rounded-xl w-full p-3 items-center justify-between'>
                <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-lg'>AutoGo <span><i className="ri-user-3-fill"></i> 3</span></h4>
                    <h5 className='font-medium text-sm'>4 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, Auto rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹118.20</h2>
            </div>
        </div>
    )
}

export default VehiclePanel
