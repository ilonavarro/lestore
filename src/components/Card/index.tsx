import { IProduct } from '@/Interfaces/IProduct'
import Image from 'next/image'
import ProductNameFilter from '../ProductNameFilter'

export default function Card({ Product }: { Product: IProduct }) {
  return (
    <div className='w-full flex flex-col items-center bg-slate-200 border border-gray-300 rounded-lg p-4'>
      <div>
        <Image src={Product.image} alt={Product.title} width={100} height={112} />
      </div>
      <h2 className='text-xl font-bold mt-4 text-center'>
        <ProductNameFilter name={Product.title} />
      </h2>
      <p>Price: {Product.price}</p>
      <p>Category: {Product.category}</p>
      <p>Rating: {Product.rating.rate}</p>
    </div>
  )
}
