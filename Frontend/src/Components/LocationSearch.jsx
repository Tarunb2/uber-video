import React from 'react'
import 'remixicon/fonts/remixicon.css'

const LocationSearch = (props) => {


  const locations = [
    "24B, Near Kapoor's cafe, Sheryians Coding School. Bhopal.",
    "22C, Near Baranwal's cafe, Sheryians Coding School. Bhopal.",
    "20B, Near Srivastav's cafe, Sheryians Coding School. Bhopal.",
    "14B, Near tiwari's cafe, Sheryians Coding School. Bhopal."
  ]
  return (
    <div className='p-4'>
      {/* this is just a sakple data */}
      {
        locations.map(function (elem,idx) {
          return <div key={idx} onClick={()=>{
            props.setVehiclePanelOpen(true)
            props.setPanelOpen(false)
          }} className='flex gap-4 border-2 p-3 mt-4 border-gray-200 active:border-black rounded-xl shadow-md items-center px-2 justify-start'>
            <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-normal'>{elem}</h4>
          </div>
        })
      }
    </div>
  )
}

export default LocationSearch
