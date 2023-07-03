interface MoreLessProps {
  quantity: number
  setQuantity: (quantity: number) => void
}

export default function MoreLess({ quantity, setQuantity }: MoreLessProps) {
  return (
    // <div className='w-full flex items-center space-x-2 bg-red-800'>
    <div className='w-full flex items-center justify-evenly space-x-4 p-4'>
      <button
        onClick={() => (quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0))}
        className='text-xl font-bold w-8 h-8 text-red-800 border-2  hover:bg-red-800 hover:text-white'
      >
        -
      </button>
      <div className='text-center w-8 h-8 border-2 border-black/60'>{quantity}</div>
      <button
        onClick={() => setQuantity(quantity + 1)}
        className='text-xl font-bold w-8 h-8 text-green-800 border-2 hover:bg-green-800 hover:text-white'
      >
        +
      </button>
    </div>
  )
}
