import { CategoriesApi } from '@/Api'
import Link from 'next/link'

export default async function Category() {
  const categories = await CategoriesApi()
  return (
    <div>
      <div className='w-full flex flex-row justify-center'>
        {categories.map((category: string | undefined) => (
          <div key={category} className='w-full flex flex-row justify-center'>
            <Link href={`/category/${category}`} className='capitalize hover:font-bold'>
              {category}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
