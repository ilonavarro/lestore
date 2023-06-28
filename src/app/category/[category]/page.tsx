import { CategoriesProducts } from '@/Api'
import { IProduct } from '@/Interfaces/IProduct'
import Card from '@/components/Card'
import React from 'react'

interface CategoryPageProps {
  params: {
    category: string
  }
}
export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = params.category
  const categoryProducts = await CategoriesProducts(category)
  return (
    <>
      <div>{category}</div>
      <section>
        <div className='grid grid-cols-12 p-12'>
          {categoryProducts.map((item: IProduct) => (
            <div key={item.id} className='col-span-6 p-2'>
              <Card Product={item} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
