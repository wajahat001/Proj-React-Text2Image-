import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Login = () => {
    const [state, setState] = useState('Login')



  return (
    <div className='absolute left-0 top-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center' >

        <form className='relative bg-white p-10 rounded-xl text-slate-500 ' >
            <h1 className='text-center text-neutral-700 text-2xl font-medium' >{state}</h1>
            <p className='text-sm' >Welcome back! Please SignIn to continue</p>

          { state !== 'Login' &&  <div className='border px-6 py-2  flex items-center mt-5 gap-2 rounded-full' >
                <img src={assets.user_icon} alt="" />
                <input className='outline-none text-sm'  type="text" placeholder='Full Name' required />
            </div>}

            <div className='border px-6 py-2  flex items-center mt-4 gap-2 rounded-full' >
                <img src={assets.email_icon} alt="" />
                <input className='outline-none text-sm'  type="email" placeholder='Email id' required />
            </div>
            <div className='border px-6 py-2  flex items-center mt-4 gap-2 rounded-full' >
                <img src={assets.lock_icon} alt="" />
                <input className='outline-none text-sm'  type="password" placeholder='Password' required />
            </div>
            <p className='text-sm text-blue-600 my-4 cursor-pointer' >Forgot password</p>

            <button className='bg-blue-600 rounded-full text-white w-full py-2' >{state=== 'Login' ? 'Login' : 'create account'}</button>

            {state === 'Login' ?  <p className='text-center mt-5' >Dont have an account? <span className='text-blue-600 cursor-pointer'>SignUp</span></p>
            :
            <p className='text-center mt-5' >Already have an account <span className='text-blue-600 cursor-pointer'>Login</span></p>}

            <img className='absolute top-5 right-5 cursor-pointer' src={assets.cross_icon} alt="" />
        </form>
    </div>
  )
}

export default Login