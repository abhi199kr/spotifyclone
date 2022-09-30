import React, { useState } from 'react'
import logo from '../Images/logo.png';
import fb from '../Images/fb.png';
import goo from '../Images/goo.png';
import {auth} from './firebase'
import { Link, Redirect } from "react-router-dom";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { Navigate,useNavigate } from 'react-router-dom';



const Signup = () => {
  const navi=useNavigate()
  const [currentUser, setCurrentUser] = useState(null);  
  const [email,setemail]=useState("")
  const [cemail,csetemail]=useState("")
  const [password,setpassword]=useState("")
  const [error,seterror]=useState("")
  const validatePassword = () => {
    let isValid = true
    if (email !== '' && cemail !== ''){
      if (email !== cemail) {
        isValid = false
        seterror('Passwords does not match')
      }
    }
    return isValid
  }
  
  const register=(e)=>{
    e.preventDefault();
   
   console.log("register")
   if(validatePassword()) {
    // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
          console.log(res.user)
        })
      .catch(err => seterror(err.message))
  }
  setemail('')
  setpassword('')
  
}
// console.log("register")
// console.log(email,password)
// createUserWithEmailAndPassword(auth,
//      email, password,)
// .then((userCredential) => {
// // Signed in 
// const user = userCredential.user;
// // ...
// navi('/')
// })
// .catch((error) => {
// const errorCode = error.code;
// const errorMessage = error.message;
// // const errorMessage="Something worng";
// // ..
// });
// setemail('')
// setpassword('')


// }
    
    
  



  return (
    <>
  <div className='flex items-center justify-center pt-10  '>
                <img src={logo} alt=""  className='rouded-full w-8 h-8  '/>
                <h1 className=' text-2xl pl-2  font-bold'>Spotify</h1>
                </div>
        <div className=' flex flex-col justify-center items-center pt-10'>
        <h1 className=' text-2xl pl-2  font-bold'>Sign up for free start lsitening</h1>
        <button class="w-92 hover:w-96 mt-5 bg-blue-700 flex text-white font-bold py-2 px-4 rounded-full">
  <img src={fb} className="h-5 w-5" alt="" />
  <p className='px-5 '>SIGN UP WITH THE FACEBOOK</p>
</button>
<button class="w-92 mt-5 bg-white border-2 border-gray-800 hover:w-96 flex text-black font-bold py-2 px-4 rounded-full">
  <img src={goo} className="h-5 w-5" alt="" />
  <p className='px-5 '>SIGN UP WITH THE GOOGLE</p>
</button>
<div class="relative flex py-5 items-center">
    <div class="flex-grow border-t-2 w-36 border-gray-400"></div>
    <span class="flex-shrink mx-4 text-gray-800">Or</span>
    <div class="flex-grow border-t-2 w-36 border-gray-400"></div>
</div>
        </div>

{/* From hear sign up started */}
<div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <form onSubmit={register}>
                    <div>
                      <label for="email" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">What's your email?</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" value={email} onChange={e=>setemail(e.target.value)} required=""/>
                  </div>

                  <div className='mt-5'>
                      <label for="email" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Confirm your email?</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""  value={cemail} onChange={e=>csetemail(e.target.value)} />
                  </div>
                  <div className='mt-5'>
                      <label for="email" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Create a password</label>
                      <input type="password" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" value={password} onChange={e=>setpassword(e.target.value)}/>
                  </div>
                  <div className='mt-5'>
                      <label for="email" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">What Should we call you?</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div className='mt-5'>
                  <p className='font-bold text-gray-900'>What's your Date of Birth</p>

                  </div>
                  <div className='flex pt-3'>
                  <div className='font-bold text-gray-900'>
                    year
                    <br />
                    <input type="text" placeholder='YYYY' className='mt-2 px-2 border-2 w-16 h-10' />
                  </div>
                  <div className='font-bold text-gray-900 mx-5'>
                    Month
                    <br />
                    <select name="month" className='mt-2 px-2 border-2 w-40 h-10'>
                    <option value="01" selected>Month</option>
        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
     </select> 
                  </div>
                  <div className='font-bold text-gray-900'>
                    Day
                    <br />
                    <input type="text" placeholder='DD' className='mt-2 px-2 border-2 w-16 h-10' />
                  </div>

                  </div>
                  <div className='mt-5'>
                  <p className='font-bold text-gray-900'>What's your Date of Birth</p>
                  <div className='flex'>
                  <input className='mr-2' type="radio" name="gender" value="male"/> Male
                  <input className='mx-2' type="radio" name="gender" value="male"/> Female
                  <input className='mx-2' type="radio" name="gender" value="male"/>Non-binary
                  <input className='mx-2' type="radio" name="gender" value="male"/> other
                    <br />
                   
                


                  </div>
                  <input className='mr-2 ' type="radio" name="gender" value="male"/><span className='font-semibold'>Prefer not to Say</span>

                  </div>
                  <div className='mt-5'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className='text-gray-900 px-3' for="vehicle1">I would prefer not to receive marketing messages from Spotify</label><br></br>
</div>

<div className='mt-5'>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className='text-gray-900 px-3' for="vehicle1">Share my registration data with Spotify's content providers for marketing purposes.</label><br></br>
</div>
<div className='text-center mt-5'>
<button type='submit '  className='border-2 rounded-full w-40 hover:w-44 hover:h-16 h-14 bg-green-500 text-extrabold font-bold text-center' text-center rounded-full>Sign up</button>
</div>

                    

                    

                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                
                    </form>

                    
                </div>

                <div class="text-grey-dark mt-6">
                    Already have an account? 
                    <a class="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup
