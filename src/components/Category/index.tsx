import { CategoriesApi } from '@/Api'
import Link from 'next/link'

export default async function Category() {
  const categories = await CategoriesApi()
  return (
    <div>
      <div className='w-full flex flex-row justify-center'>
        {categories.map((category: string | undefined) => (
          <div
            key={category}
            className='w-full flex flex-row justify-center border border-y-gray-950'
          >
            <Link
              href={`/category/${category}`}
              className='capitalize font-semibold hover:font-extrabold py-2'
            >
              {category}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
