import React from 'react'
import {Link} from 'react-router-dom'
import Play from './Play'

const Daside = () => {
  return (
    <div className=''>
    <div className='flex pt-10 '>
    <h1 className='text-white text-2xl hover:underline font-bold'>Sspotify Playlsits</h1>
 <h1 className='ml-auto'> <Link to="/playlsit"><h1 className='text-white ml-auto'>SEE ALL</h1></Link></h1>
  {/* <h1 className='ml-auto'>SEE ALL</h1> */}
    

    </div>

   <div className='inline-flex items-baseline'><Play/></div> 
</div>
      
    
  )
}

export default Daside
