import { IProduct } from '@/Interfaces/IProduct'
import Image from 'next/image'
import ProductNameFilter from '../ProductNameFilter'
import Link from 'next/link'
import AddToCart from '../AddToCart'

export default function Card({ Product }: { Product: IProduct }) {
  return (
    <div
      className='w-auto h-auto flex flex-col items-center justify-center bg-white border border-gray-300 rounded-lg p-4
        hover:font-bold hover:border-4 hover:border-black'
    >
      <div className='flex items-center justify-center relative h-48 w-48'>
        <Link href={`/product/${Product.id}`}>
          <Image
            src={Product.image}
            alt={Product.title}
            width={100}
            height={112}
            className='h-auto w-auto'
          />
        </Link>
      </div>
      <Link href={`/product/${Product.id}`}>
        <h2 className='text-xl font-bold mt-4 text-center'>
          <ProductNameFilter name={Product.title} />
        </h2>
        <p>Price: {Product.price}</p>
        <p>Category: {Product.category}</p>
        <p>Rating: {Product.rating.rate}</p>
      </Link>
      <div
        className='w-full flex justify-center mt-4
        
      '
      >
        <AddToCart key={Product.id} productId={Product.id} />
      </div>
    </div>
  )
}
