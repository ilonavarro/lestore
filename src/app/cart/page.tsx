import ProductCart from '@/components/ProductCart'

export const metadata = {
  title: 'Cart | LEStore',
  description: 'Cart product'
}

export default async function Cart() {
  return (
    <div className='flex items-center justify-center mt-4'>
      <ProductCart />
    </div>
  )
}
