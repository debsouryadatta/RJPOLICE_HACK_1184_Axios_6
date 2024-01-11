import React from 'react'
import { Nav2 } from '../components/Nav2'
import { Alert } from '../components/AlertsPage/Alert'

const AlertsPage = () => {
  return (
    <>
      <div>
        <Nav2 />
      </div>
      <h1 className='text-center mt-10 text-2xl font-semibold'>ALERTS</h1>
      <div className='flex justify-center mt-10'>
        <Alert/>
      </div>
    </>
  )
}

export default AlertsPage