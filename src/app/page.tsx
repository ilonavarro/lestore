import { ProductsApi } from '@/Api'
import { IProduct } from '@/Interfaces/IProduct'
import Card from '@/components/Card'

import Products from '@/components/Products'
import SearchBar from '@/components/SearchBar'
// import { useEffect } from 'react'

export default async function Home() {
  const allProducts = await ProductsApi()
  const isDataEmpty =
    !Array.isArray(allProducts) || allProducts.length === 0 || !allProducts

  return (
    <main className='w-full flex flex-col items-center justify-center'>
      <SearchBar />
      {!isDataEmpty ? (
        <section>
          <div className='grid grid-cols-12 p-12'>
            {allProducts.map((item: IProduct) => (
              <div key={item.id} className='col-span-6 p-2'>
                <Card Product={item} />
              </div>
            ))}
          </div>
        </section>
      ) : (
        <div>
          <h2>Ops, no results</h2>
          {/* <p>{allProducts?.message}</p> */}
        </div>
      )}
      {/* <div className='grid grid-cols-12 p-12'>
        {data.map((item: IProduct) => (
          <div key={item.id} className='col-span-6 p-2'>
            <Card Product={item} />
          </div>
        ))}
      </div> */}
      {/* <Products /> */}
    </main>
  )
}
