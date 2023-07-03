'use client'
import { useGlobalContext } from '@/app/Context/store'
import ProductCartResult from './ProductCartResult'

export default async function ProductCart() {
  // const { productsGlobal, setProductsGlobal } = useGlobalContext()
  // console.log(productsGlobal)

  return (
    <div>
      {/* {productsGlobal.length > 0 ? (
        <div>
          {productsGlobal.map(product => (
            <ProductCartResult
              key={product.productId}
              productID={product.productId}
              productQuantity={product.productQuantity}
            />
          ))}
        </div>
      ) : (
        <div>You don &apos; t have any product in your cart</div>
      )} */}
    </div>
  )
}
