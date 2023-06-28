import { SearchFieldProps } from '@/Interfaces/IProduct'
import React from 'react'

export default function SearchField({ search, setSearch }: SearchFieldProps) {
  return (
    <>
      <input
        type='text'
        name='search'
        placeholder='Search'
        className='w-full px-4 py-2 rounded-md border-2 border-gray-300'
        onChange={e => {
          setSearch(e.target.value)
          console.log(search)
        }}
      />
    </>
  )
}
