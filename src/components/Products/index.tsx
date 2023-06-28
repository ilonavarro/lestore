import { IProduct } from '@/Interfaces/IProduct'
import Card from '../Card'
import FilterProduct from '../FilterProduct'

interface ProductsProps {
  Products: IProduct[]
}

export default function Products({ Products }: ProductsProps) {
  const isDataNotEmpty = !(!Array.isArray(Products) || Products.length === 0 || !Products)
  return (
    <main className='w-full flex flex-col items-center justify-center mt-8'>
      {isDataNotEmpty ? (
        <section>
          <FilterProduct />
          <div className='grid grid-cols-12 p-12 pt-0'>
            {Products.map(item => (
              <div key={item.id} className='col-span-6 p-2'>
                <Card Product={item} />
              </div>
            ))}
          </div>
        </section>
      ) : (
        <div>
          <h2>Ops, no results</h2>
        </div>
      )}
    </main>
  )
}
