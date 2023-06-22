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

export async function Products() {
  const data = await apiCall(api)
  return data as IProduct[]
}

export async function Product(id: number) {
  const data = await apiCall(`${api}/${id}`)
  return data
}

export async function Categories() {
  const data = await apiCall(`${api}/categories`)
  return data
}
