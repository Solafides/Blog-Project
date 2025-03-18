import { Label,Button } from 'flowbite-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    try{
      const res = fetch('api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-full bg-cover bg-center" style={{ backgroundImage: "url('https://dam.media.un.org/AssetLink/s816bq1b38tn65pi353g0r2q21u3obbl')" }}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        {/* <div className="h-full bg-cover bg-center" /> */}
          
        </div>

        <div className=" sm:mx-auto sm:w-full sm:max-w-sm  bg-black bg-opacity-80 px-6 py-6 rounded-lg sm:rounded-2xl sm:shadow-xl">
          <h2 className="mt-2 text-center text-2xl/9 font-bold tracking-tight text-white mb-8">
            Create Account
          </h2>
          <form action="#" method="POST" className="space-y-6 " onSubmit={handleSubmit}>
          <div>
              <Label htmlFor="username" className="block text-sm/6 font-medium text-white">
                Username
              </Label>
              <div className="mt-2">
                <input onChange={handleChange}
                  id="username"
                  name="username"
                  type="text"
                  placeholder='Enter your username'
                  required
                  autoComplete="username"
                  className="block w-full rounded-md bg-gray-800 bg-opacity-80 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email" className="block text-sm/6 font-medium text-white">
                Email address
              </Label>
              <div className="mt-2">
                <input onChange={handleChange}
                  id="email"
                  name="email"
                  type="email"
                  placeholder='Email address'
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-gray-800 bg-opacity-80 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="block text-sm/6 font-medium text-white">
                  Password
                </Label>
                
              </div>
              <div className="mt-2">
                <input onChange={handleChange}
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-gray-800 bg-opacity-80 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-500 sm:text-sm/6"
                />
              </div>
              <div className="text-sm text-right">
                  <Link to="#" className="font-semibold text-orange-500 hover:text-white">   
                    Forgot password?
                  </Link>
                </div>
            </div>

            <div>
              <Button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-500 border-orange-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Sign up
              </Button>
            </div>
          </form>

          <p className="mt-2 text-center text-sm/6 text-white">
            have an account?{' '}
            <Link to="/signin" className="font-semibold text-orange-500 hover:text-red-600">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
