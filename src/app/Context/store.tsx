'use client'

import { IProduct } from '@/Interfaces/IProduct'
import { createContext, useContext, Dispatch, SetStateAction, useState } from 'react'

// type ProductType = {
//   productId: number
//   setProductId?: Dispatch<SetStateAction<number>>
//   productQuantity: number
//   setProductQuantity?: Dispatch<SetStateAction<number>>
// }

// type ProductType = {
//   productId: number
//   productQuantity: number
// }

// interface ContextProps {
//   userId: number
//   setUserId: Dispatch<SetStateAction<number>>
//   cartId: number
//   setCartId: Dispatch<SetStateAction<number>>
//   productId: number
//   setProductId: Dispatch<SetStateAction<number>>
//   productsGlobal: ProductType[]
//   setProductsGlobal: Dispatch<SetStateAction<ProductType[]>>
// }

// const GlobalContext = createContext<ContextProps>({
//   userId: 0,
//   setUserId: (): number => 0,
//   cartId: 0,
//   setCartId: (): number => 0,
//   productId: 0,
//   setProductId: (): number => 0,
//   productsGlobal: [],
//   setProductsGlobal: (): ProductType[] => []
// })

interface ProductsGlobal extends IProduct {
  productQuantity: number
  setProductQuantity: Dispatch<SetStateAction<number>>
}

const GlobalContext = createContext<ProductsGlobal>({
  id: 0,
  title: '',
  price: 0,
  description: '',
  category: '',
  image: '',
  rating: {
    rate: 0,
    count: 0
  },
  productQuantity: 0,
  setProductQuantity: (): number => 0
})

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  // const [userId, setUserId] = useState(0)
  // const [cartId, setCartId] = useState(0)
  // const [productId, setProductId] = useState(0)
  const [productQuantity, setProductQuantity] = useState(0)
  // const [productsGlobal, setProductsGlobal] = useState<ProductType[]>([])
  const [productsGlobal, setProductsGlobal] = useState<ProductsGlobal[]>([])

  return (
    <GlobalContext.Provider
      value={{
        id: 0,
        title: '',
        price: 0,
        description: '',
        category: '',
        image: '',
        rating: {
          rate: 0,
          count: 0
        },
        productQuantity: 0,
        setProductQuantity: (): number => 0
      }}
      // value={{
      //   // userId,
      //   // setUserId,
      //   // cartId,
      //   // setCartId,
      //   // productId,
      //   // setProductId,
      //   // productsGlobal,
      //   // setProductsGlobal
      // }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)

// id,
//         title,
//         price,
//         description,
//         category,
//         image,
//         rating: {
//           rate,
//           count
//         },
//         productQuantity,
//         setProductQuantity
