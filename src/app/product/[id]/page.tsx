import { ProductApi } from '@/Api'
import { IProduct } from '@/Interfaces/IProduct'
import ProductItem from '@/components/ProductItem'
import Image from 'next/image'

interface ProductPageProps {
  params: {
    id: number
  }
}

export default async function Product({ params }: ProductPageProps) {
  const productID = params.id
  const product = (await ProductApi(productID)) as IProduct
  // const product = false
  return (
    <div>
      {product ? (
        <ProductItem {...product} />
      ) : (
        <div className='flex justify-center font-extrabold pt-12'>Product not found</div>
      )}
    </div>
  )
}
