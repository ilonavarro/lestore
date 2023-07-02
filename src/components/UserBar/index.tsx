'use client'
import React from 'react'
import { CartIcon, UserIcon } from '../Icons'

export default function UserBar() {
  return (
    <div className='w-full flex justify-end'>
      <UserIcon onClick={() => console.log('teste')} />
      <CartIcon />
    </div>
  )
}
