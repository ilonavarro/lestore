import { IProduct } from '@/Interfaces/IProduct'
import Image from 'next/image'

export default function Card({ Product }: { Product: IProduct }) {
  return (
    <div className='w-full flex flex-col items-center justify-center bg-slate-200 border border-gray-300 rounded-lg p-4'>
      <div>
        <Image src={Product.image} alt={Product.title} width={100} height={112} />
      </div>
      <p>Title: {Product.title}</p>
      <p>Description: {Product.description}</p>
      <p>Price: {Product.price}</p>
      <p>Category: {Product.category}</p>
      <p>Rating</p>
    </div>
  )
}
