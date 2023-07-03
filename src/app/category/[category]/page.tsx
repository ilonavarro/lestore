import { CategoriesProducts } from '@/Api'
import { searchParams } from '@/Interfaces/IProduct'
import Products from '@/components/Products'
import { Metadata, ResolvingMetadata } from 'next'

export async function generateMetadata(
  { params }: CategoryPageProps,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const pageName = params.category.replace(/%20/g, ' ').toUpperCase()

  return {
    title: `${pageName} | LEStore`,
    description: `Category ${pageName} | LEStore`
  }
}

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
