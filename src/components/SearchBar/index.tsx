'use client'

import { useState } from 'react'

export default function SearchBar() {
  const [search, setSearch] = useState('')
  const handleSearch = () => {}
  return (
    <form onSubmit={handleSearch}>
      <input
        type='text'
        name='search'
        placeholder='Search'
        className='w-full px-4 py-2 rounded-md border-2 border-gray-300'
        onChange={e => setSearch(e.target.value)}
      />
    </form>
  )
}
