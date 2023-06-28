import { SetStateAction } from 'react'

interface FilterProductProps {
  filterPrice: Boolean
  setFilterPrice: React.Dispatch<SetStateAction<Boolean>>
  // setFilterProduct: (filterProduct: string) => void
}

export default function FilterProduct({
  filterPrice,
  setFilterPrice
}: FilterProductProps) {
  function orderPrice() {
    setFilterPrice(!filterPrice)
  }

  return (
    <div className='w-full flex justify-end pr-16 pb-0 font-bold text-black'>
      <div>
        <button
          className='border border-black/20 p-1 rounded-lg text-xs
        hover:bg-red-700 hover:text-white'
          onClick={orderPrice}
        >
          Price
        </button>
      </div>
      <div>
        <button
          className='border border-black/20 p-1 rounded-lg text-xs ml-4
      hover:bg-red-700 hover:text-white'
        >
          Popularity
        </button>
      </div>
    </div>
  )
}
