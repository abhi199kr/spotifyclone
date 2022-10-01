import React from 'react'
import Daside from './Daside'
import Dheader from './Dheader'
import Dside from './Dside'

const Dashboard = () => {
  return (
    <div className='bg-black w-screen h-screen text-white overflow-hidden'>
    <Dheader/>
    <div className='flex'>
    <div className='w-2/12'>
    <Dside/>

    </div>
    <div className=' w-10/12 text-white bg-zinc-400 rounded  overflow-hidden mx-2'>
        <Daside/>
        
    </div>

    </div>
      
    </div>
  )
}

export default Dashboard
