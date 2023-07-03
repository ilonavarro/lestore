'use client'
import React from 'react'
import { CartIcon, UserIcon } from '../Icons'
import { useGlobalContext } from '@/app/Context/store'
import Link from 'next/link'

export default function UserBar() {
  // const { productsGlobal } = useGlobalContext()

  return (
    <div className='w-full flex justify-end items-center'>
      <div className='cursor-pointer hover:text-red-700 hover:scale-110'>
        <UserIcon />
      </div>
      <div className='cursor-pointer hover:text-red-700 hover:scale-110'>
        {/* {productsGlobal.length > 0 && (
          <div
            className='rounded-full w-[15px] h-[15px] flex justify-center items-center align-baseline 
      font-bold text-[9px] p-1 bg-[red] text-white absolute ml-[1.20rem]'
          >
            {productsGlobal.length}
          </div>
        )} */}
        <Link href='/cart'>
          <CartIcon />
        </Link>
      </div>
    </div>
  )
}
