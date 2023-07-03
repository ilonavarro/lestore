import { ProductApi } from '@/Api'
import { IProduct } from '@/Interfaces/IProduct'
import ProductItem from '@/components/ProductItem'
import { Metadata, ResolvingMetadata } from 'next'

export const metadata = {
  title: 'Product | LEStore',
  description: 'Product Page | LEStore'
}

interface ProductPageProps {
  params: {
    id: number
  }
}

export default async function Product({ params }: ProductPageProps) {
  const productID = params.id
  const product = (await ProductApi(productID)) as IProduct
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
