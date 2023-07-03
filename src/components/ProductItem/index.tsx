import { IProduct } from '@/Interfaces/IProduct'
import Image from 'next/image'
import Lightbox from '../Lightbox'
import RelatedProducts from '../Card/RelatedProducts'

export default function ProductItem(product: IProduct) {
  return (
    <div className='flex flex-col items-center mt-8'>
      <h2 className='text-2xl font-semibold m-2'>{product.title}</h2>
      <div className='w-1/2 flex flex-row flex-nowrap justify-center content-normal'>
        <div className='flex flex-grow justify-center p-2'>
          <Lightbox image={product.image} title={product.title} />
        </div>
        <div className='flex-grow flex flex-col p-2'>
          <p>Price: {product.price}</p>
          <p>Category: {product.category}</p>
          <p>
            Rating: {product.rating.rate} Count: {product.rating.count}
          </p>
        </div>
      </div>
      <RelatedProducts category={product.category} productId={product.id} />
    </div>
  )
}
