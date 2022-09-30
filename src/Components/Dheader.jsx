import React from 'react'
import logo from '../Images/logo.png';
import home from '../Images/home.webp';
import love from '../Images/love.png';
import add from '../Images/add.png';
import search from '../Images/search.png';
import vline from '../Images/vline.png';
import profile from '../Images/profle.png';
import Dropdown from './Daside'

const Dheader = () => {
  return (
    <div>
    <header className='flex p-5'>
    <img src={logo} className="w-10 h-10 rounded-full" alt="" />
    <div className='mx-auto flex'>
        <img src={home} className="bg-white w-10 h-10 rounded-full" alt="" />
        <div className='px-2 rounded-full bg-zinc-400 border-2 border-white'>
        <form className='rounded-3xl bg-zinc-400'>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
    <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" class="block p-4 pl-10 w-full roudnded-full text-sm text-gray-900 bg-zinc-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
        
    </div>
</form>

            
        </div>
    </div>
    <div className='ml-auto'>
        {/* <img src={profile} onClick={()=>console.log("dfd")} className="w- h-10 rounded-full" alt="" /> */}
        {/* <Dropdown/> */}
        <div className="relative w-full lg:max-w-sm">
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option className='w-5 h-5 rounded-full'>jfijf</option>
                <option>Laravel 9 with React</option>
                <option>React with Tailwind CSS</option>
                <option>React With Headless UI</option>
            </select>
        </div>
    </div>
  
    {/* <Dropdown/> */}
    {/* <div>
    <Dropdown/>
    </div>
     */}
    


    </header>
      
    </div>
  )
}

export default Dheader
