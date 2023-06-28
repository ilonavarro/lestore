interface ProductNameFilter {
  name: string
}

export default function ProductNameFilter({ name }: ProductNameFilter) {
  const filteredName = name.length > 20 ? name.slice(0, 20) + '...' : name
  return filteredName
}
