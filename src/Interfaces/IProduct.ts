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
}

export interface SearchFieldProps {
  search: string
  setSearch: (search: string) => void
}

export interface ICategories {
  title: string
}
