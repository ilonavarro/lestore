import { IProduct } from '@/Interfaces/IProduct'
import Card from '@/components/Card'
import Image from 'next/image'

export default async function Home() {
  const api = 'https://fakestoreapi.com/products'
  const res = await fetch(api, {
    next: {
      revalidate: 3600
    }
  })
  const data = await res.json()
  // .then(res => res.json())
  // .then(json => console.log(json))
  return (
    // <main className='flex min-h-screen flex-col items-center justify-between p-24'>
    // <main className='flex min-h-screen items-center justify-between p-24 w-full'> // teste 2
    <main className='w-full flex flex-col items-center justify-center'>
      {/* <main className='grid grid-cols-12 p-24'> */}
      <div className='grid grid-cols-12 p-12'>
        {/* className='flex flex-row items-center justify-between w-full max-w-5xl gap-8'> */}
        {data.map((item: IProduct) => (
          <div key={item.id} className='col-span-6 p-2'>
            <Card Product={item} />
          </div>
        ))}
      </div>
    </main>
  )
}
