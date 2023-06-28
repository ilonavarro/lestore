import { IProduct } from '@/Interfaces/IProduct'

const api = 'https://fakestoreapi.com/products'

export async function apiCall(url: string) {
  const res = await fetch(url, {
    next: {
      revalidate: 3600
    }
  })
  const data = await res.json()
  return data
}

export async function ProductsApi() {
  const data = await apiCall(api)
  return data as IProduct[]
}

export async function ProductApi(id: number) {
  const data = await apiCall(`${api}/${id}`)
  return data
}

export async function CategoriesApi() {
  const data = await apiCall(`${api}/categories`)
  return data
}

export async function CategoriesProducts(category: string) {
  const data = await apiCall(`${api}/category/${category}`)
  return data
}
