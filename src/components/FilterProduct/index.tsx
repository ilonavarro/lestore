export default function FilterProduct() {
  return (
    <div className='w-full flex justify-end pr-16 pb-0 font-bold text-black'>
      <div>
        <button
          className='border border-black/20 p-1 rounded-lg text-xs
        hover:bg-red-700 hover:text-white'
        >
          Price
        </button>
      </div>
      <div
        className='border border-black/20 p-1 rounded-lg text-xs ml-4
      hover:bg-red-700 hover:text-white'
      >
        <button>Popularity</button>
      </div>
    </div>
  )
}
