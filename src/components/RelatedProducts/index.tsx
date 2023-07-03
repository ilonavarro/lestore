import { CategoriesProducts } from '@/Api'
import { IProduct } from '@/Interfaces/IProduct'
import Image from 'next/image'
import Link from 'next/link'

interface RelatedProductsProps {
  category: string
  productId: number
}

export default async function RelatedProducts({
  category,
  productId
}: RelatedProductsProps) {
  const categoryProducts = (await CategoriesProducts(category)) as IProduct[]
  return (
    <>
      {categoryProducts.length > 0 && (
        <div className='w-full flex mt-2 justify-center items-center'>
          <div className='text-lg font-bold text-red-800 pr-4'>Related Products</div>
          <div className='flex flex-wrap justify-center items-center'>
            {categoryProducts
              .filter(item => item.id !== productId)
              .map(item => (
                <Link href={`/product/${item.id}`} key={item.id}>
                  <div key={item.id} className='mx-4'>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={50}
                      height={56}
                      priority
                      className='border-b-2 border-red-800'
                    />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}
    </>
  )
}
