import { CategoriesProducts } from '@/Api'
import { searchParams } from '@/Interfaces/IProduct'
import Products from '@/components/Products'

interface CategoryPageProps {
  params: {
    category: string
  }
  searchParams?: searchParams
}
export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const category = params.category
  const categoryProducts = await CategoriesProducts(category)
  return <Products Products={categoryProducts} searchParams={searchParams} />
}
