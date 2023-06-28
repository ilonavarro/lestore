import { CategoriesProducts } from '@/Api'
import Products from '@/components/Products'

interface CategoryPageProps {
  params: {
    category: string
  }
}
export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = params.category
  const categoryProducts = await CategoriesProducts(category)
  return <Products Products={categoryProducts} />
}
