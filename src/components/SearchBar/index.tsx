'use client'

import { useState } from 'react'
import SearchField from '../SearchField'

export default function SearchBar() {
  const [search, setSearch] = useState('')
  const handleSearch = () => {}
  return (
    <form onSubmit={handleSearch}>
      <div className='flex items-center gap-2'>
        <SearchField search={search} setSearch={setSearch} />
        <button>Test</button>
      </div>
    </form>
  )
}
