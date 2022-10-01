import React from 'react'
import logo from '../Images/logo.png';
import home from '../Images/home.webp';
import love from '../Images/love.png';
import add from '../Images/add.png';
import search from '../Images/search.png';
import vline from '../Images/vline.png';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown'

const Dside = () => {
  return (
    <div className='bg-zinc-400 rounded h-screen'>
    <div className='hidden md:block '>
  
            
            {/* This is second div for below  home conternt */}
           
           
            <div className='pl-10 pt-2'>
                <div className='flex'>
                <img src={vline} alt=""  className='rouded-full w-8 h-8 bg-white'/>
                <h1 className='text-white text-1xl pl-2  font-bold'>Libraries</h1>
                </div>
            </div>
            <div className='pl-10 pt-2'>
                <div className='flex'>
                <img src={add} alt=""  className='rouded-full w-8 h-8 bg-white'/>
                <h1 className='text-white text-1xl pl-2  font-bold'>Create Playlsit</h1>
                </div>
            </div>
            <div className='pl-10 pt-2'>
                <div className='flex'>
                <img src={love} alt=""  className='rouded-full w-8 h-8 bg-white'/>
                <h1 className='text-white text-1xl pl-2  font-bold'>Liked Songs</h1>
                </div>
            </div>
            
            

            </div>
      
    </div>
  )
}

export default Dside
