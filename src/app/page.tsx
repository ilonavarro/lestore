import { Products } from '@/Api'
import { IProduct } from '@/Interfaces/IProduct'
import Card from '@/components/Card'

export default async function Home() {
  const data = await Products()

  return (
    <main className='w-full flex flex-col items-center justify-center'>
      <div className='grid grid-cols-12 p-12'>
        {data.map((item: IProduct) => (
          <div key={item.id} className='col-span-6 p-2'>
            <Card Product={item} />
          </div>
        ))}
      </div>
    </main>
  )
}
