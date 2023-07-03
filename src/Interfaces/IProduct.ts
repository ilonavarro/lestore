export interface IProduct {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
  quantity?: number
}

export interface SearchFieldProps {
  search: string
  setSearch: (search: string) => void
}

export interface ICategories {
  title: string
}

export interface searchParams {
  filter: string
}
