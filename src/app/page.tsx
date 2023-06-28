import { ProductsApi } from '@/Api'
import { IProduct } from '@/Interfaces/IProduct'
import Card from '@/components/Card'
import Products from '@/components/Products'

export default async function Home() {
  const allProducts = await ProductsApi()

  return (
    <>
      <Products Products={allProducts} />
    </>
  )
}
