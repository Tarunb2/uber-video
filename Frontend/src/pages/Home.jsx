
import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import 'remixicon/fonts/remixicon.css'
import LocationSearch from '../Components/LocationSearch'
import VehiclePanel from '../Components/VehiclePanel'
import ConfirmedVehicle from '../Components/ConfirmedVehicle'
import LookingForDriver from '../Components/LookingForDriver'
import WaitingForDriver from '../Components/WaitingForDriver'



const Home = () => {

  const [pickUp, setPickUp] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setvehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()

  }
  useGSAP(function () {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [vehiclePanelOpen])
  useGSAP(function () {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [vehiclePanelOpen])

  useGSAP(function () {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [confirmRidePanel])

  useGSAP(function () {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [vehicleFound])

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, { height: '70%' })
      gsap.to(panelCloseRef.current, { opacity: 1 })
    } else {
      gsap.to(panelRef.current, { height: '0%', })
      gsap.to(panelCloseRef.current, { opacity: 0, })
    }
  }, [panelOpen])
  return (

    <div className='relative h-screen overflow-hidden'>
      <img className=' w-24 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>

      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='bg-white h-[30%] p-6 relative rounded-t-3xl'>
          <h5 ref={panelCloseRef} className='right-6 opacity-0 top-6 absolute text-2xl text-gray-800' onClick={() => setPanelOpen(!panelOpen)}>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => e.submitHandler()}>
            <div className="line absolute h-14 w-0.5 top-[45%] left-10 bg-gray-800"></div>
            <input value={pickUp} onClick={() => setPanelOpen(true)} onChange={(e) => setPickUp(e.target.value)} className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-4 border border-gray-400' type="text" placeholder='Find a pick-up location' />
            <input value={destination} onClick={() => setPanelOpen(true)} onChange={(e) => setDestination(e.target.value)} className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full border border-gray-400 mt-3' type="text" placeholder='Enter your destination' />
          </form>
        </div>

        <div ref={panelRef} className='bg-white h-[0]'>
          <LocationSearch setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />

        </div>

      </div>

      <div ref={vehiclePanelRef} className='fixed z-10 bottom-0 bg-white w-full py-10 px-3 pt-14'>
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanelOpen={setVehiclePanelOpen}/>
      </div>

      <div ref={confirmRidePanelRef} className='fixed z-10 bottom-0 bg-white w-full py-10 px-3 pt-14'>
        <ConfirmedVehicle setConfirmRidePanel={setConfirmRidePanel} setvehicleFound={setvehicleFound} />
      </div>

      <div ref={vehicleFoundRef} className='fixed z-10 bottom-0 bg-white w-full py-10 px-3 pt-14'>
        <LookingForDriver setvehicleFound={setvehicleFound}/>
      </div>
      <div ref={waitingForDriverRef} className='fixed z-10 bottom-0 bg-white w-full py-10 px-3 pt-14'>
        <WaitingForDriver waitingForDriver={waitingForDriver}/>
      </div>

    </div >



  )
}

export default Home
