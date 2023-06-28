import { CategoriesApi } from '@/Api'
import Link from 'next/link'
import React from 'react'

export default async function Category() {
  const categories = await CategoriesApi()
  return (
    <div>
      {categories.map((category: string | undefined) => (
        <div key={category}>
          <Link href={`/category/${category}`}>{category}</Link>
        </div>
      ))}
    </div>
  )
}
