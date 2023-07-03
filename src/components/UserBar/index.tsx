'use client'
import React from 'react'
import { CartIcon, UserIcon } from '../Icons'

export default function UserBar() {
  return (
    <div className='w-full flex justify-end items-center'>
      <div className='cursor-pointer hover:text-red-700 hover:scale-110'>
        <UserIcon onClick={() => console.log('teste')} />
      </div>
      <div className='cursor-pointer hover:text-red-700 hover:scale-110'>
        <CartIcon />
      </div>
    </div>
  )
}
