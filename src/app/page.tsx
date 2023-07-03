import { ProductsApi } from '@/Api'
import { searchParams } from '@/Interfaces/IProduct'
import Products from '@/components/Products'

export const metadata = {
  title: 'LEStore',
  description: 'LEStore'
}

interface CategoryHomeProps {
  searchParams?: searchParams
}

export default async function Home({ searchParams }: CategoryHomeProps) {
  const allProducts = await ProductsApi()

  return (
    <>
      <Products Products={allProducts} searchParams={searchParams} />
    </>
  )
}
