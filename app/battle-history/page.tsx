'use client'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import React from 'react'
import { Providers } from '../Providers'

const page = () => {
  return (
    <Providers>
            <div className='w-full min-h-screen flex justify-center flex-col text-white'>
                <div className='mt-10 flex justify-center'>
                    <h1 className='text-6xl font-bold'>Battle History</h1>

                    <ConnectButton/>
                </div>


                <div className='bg-gray-900 rounded-lg mx-10 mt-10'>
                    <div className='border-b-2 px-4 py-2 border-gray-800 flex-between'>
                        <p>address1</p>
                        <h2>Won</h2>
                        <p>address2</p>
                    </div>

                    <div className='border-b-2 px-4 py-3 border-gray-800 flex-between'>
                        <p>address1</p>
                        <h2>Won</h2>
                        <p>address2</p>
                    </div>
                </div>
            </div>
    </Providers>
   
  )
}

export default page