import { IProduct, searchParams } from '@/Interfaces/IProduct'
import Card from '../Card'
import FilterProduct from '../FilterProduct'

interface ProductsProps {
  Products: IProduct[]
  searchParams?: searchParams
}

export default function Products({ Products, searchParams }: ProductsProps) {
  const isDataNotEmpty = !(!Array.isArray(Products) || Products.length === 0 || !Products)

  const sortProducts = (a: IProduct, b: IProduct) => {
    if (searchParams?.filter === 'Price') {
      return a.price - b.price
    } else if (searchParams?.filter === 'Popularity') {
      return b.rating.rate - a.rating.rate
    }
    return 0
  }

  const sortedProducts = searchParams ? [...Products].sort(sortProducts) : Products

  return (
    <main className='w-full flex flex-col items-center justify-center mt-8'>
      {isDataNotEmpty ? (
        <section>
          <FilterProduct />
          {searchParams?.filter && (
            <h2 className='w-full items-center justify-center text-2xl font-bold'>
              Filtering by: {searchParams.filter}
            </h2>
          )}

          <div className='grid grid-cols-12 p-12 pt-0'>
            {sortedProducts.map(item => (
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
