import React from 'react'
import logo from '../Images/logo.png';
import home from '../Images/home.webp';
import love from '../Images/love.png';
import add from '../Images/add.png';
import search from '../Images/search.png';
import vline from '../Images/vline.png';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs'
import { RiHome4Line } from 'react-icons/ri'
import Playlist from './Playlist';
import Play from './Play';

const LandingPage = () => {
  return (
    <>
        <div className='flex'>
        {/* This is for aside code material */}
            <div className='hidden md:block bg-black w-2/12 h-screen'>
            <div className='p-10'>
                <h1 className='flex'>
                <img src={logo} alt=""  className='rouded-full w-12 h-12'/>
                <h1 className='text-white text-2xl pl-2  font-bold'>Spotify</h1>
                </h1>
            </div>
            {/* This is second div for below  home conternt */}
            <div className='pl-10'>
                <div className='flex'>
                <img src={home} alt=""  className='rouded-full w-8 h-8 bg-white'/>
                <h1 className='text-white text-1xl pl-2  font-bold'>Home</h1>
                </div>
            </div>
            <div className='pl-10 pt-2'>
                <div className='flex'>
                <img src={search} alt=""  className='rouded-full w-8 h-8 bg-white'/>
                <h1 className='text-white text-1xl pl-2  font-bold'>Search</h1>
                </div>
            </div>
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
        {/* Now the codes start for another side or larger size of the screen */}
        <div className='bg-neutral-800 h-screenm w-screen'>
        {/* This sis for headr sections */}
        <header className='bg-black  h-16'>
        <div className='flex'>
        <div className='pl-5 pt-2'>
        <button className='text-white text-2xl font-bold'>&#60;</button>
        <button className='text-white text-2xl font-bold pl-10'>&#62;</button>
        </div>
        <div className='ml-auto pt-2'>
        <Link to="/Signup">    <button className='text-gray-500 hover:text-white text-xl font-semibold -pl-5 mx-5' >Sign up</button></Link>
        <Link to="/login">   <button className='text-black px-7 hover:px-8 font-bold h-12 rounded-full mx-5 bg-white'>Log in</button></Link> 
        </div>
        </div>
        
        </header>
        {/* This div is for Spotify Playlsit */}
        <div>
            <div className='flex m-5'>
            <h1 className='text-white text-2xl hover:underline font-bold'>Spotify Playlsits</h1>
         <h1 className='ml-auto'> <Link to="/playlsit"><h1 className='text-white ml-auto hover:underline'>SEE ALL</h1></Link></h1>
            

            </div>

           <div className='inline-flex items-baseline'><Play/></div> 
        </div>

        </div>
        </div>
    </>
  )
}

export default LandingPage
