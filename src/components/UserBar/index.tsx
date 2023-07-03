'use client'
import React from 'react'
import { CartIcon, UserIcon } from '../Icons'
import { useGlobalContext } from '@/app/Context/store'

export default function UserBar() {
  //teste de contexto

  const { productsGlobal } = useGlobalContext()

  //fim do teste

  return (
    <div className='w-full flex justify-end items-center'>
      <div className='cursor-pointer hover:text-red-700 hover:scale-110'>
        <UserIcon />
      </div>
      <div className='cursor-pointer hover:text-red-700 hover:scale-110'>
        <CartIcon onClick={() => console.log('ProdutoID: ', productsGlobal)} />
      </div>
    </div>
  )
}
