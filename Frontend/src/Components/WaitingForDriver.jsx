import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border">
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=> {props.waitingForDriver(false)}}><i className="text-3xl text-gray-500 ri-arrow-down-wide-fill"></i></h5>
      <div className="p-5 flex items-center space-x-4">
        <img
          src="https://img.freepik.com/free-photo/beautiful-girl-with-cute-face_144627-11591.jpg?ga=GA1.1.1182824923.1734766324&semt=ais_hybrid"
          alt="Driver"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className='pl-16'>
          <h2 className="text-lg font-semibold">SANTH</h2>
          <p className="text-xl font-bold text-gray-600">UP-42 ZX-8754</p>
          <p className="text-sm text-gray-600">White Suzuki S-Presso LXI</p>
          <div className="flex items-center space-x-1 text-yellow-500">
            <span className="text-sm">4.9</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.463a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.388-2.462a1 1 0 00-1.176 0l-3.388 2.462c-.785.57-1.84-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.343 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
            </svg>
          </div>
        </div>
      </div>

      

      <div className="p-4 border-t flex justify-center gap-y-1 flex-col ">
      <i className="text-xl font-bold ri-map-pin-fill"> 562/11-A</i>
        
        <p className="text-base text-gray-700">
          Kaikondrahalli, Bengaluru, Karnataka
        </p>
  
      </div>
    </div>
  );

}

export default WaitingForDriver
