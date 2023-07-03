'use client'

import { createContext, useContext, Dispatch, SetStateAction, useState } from 'react'

// type ProductType = {
//   productId: number
//   setProductId: Dispatch<SetStateAction<number>>
//   productQuantity: number
//   setProductQuantity: Dispatch<SetStateAction<number>>
// }
type ProductType = {
  productId: number
  productQuantity: number
}

interface ContextProps {
  userId: number
  setUserId: Dispatch<SetStateAction<number>>
  cartId: number
  setCartId: Dispatch<SetStateAction<number>>
  productsGlobal: ProductType[]
  setProductsGlobal: Dispatch<SetStateAction<ProductType[]>>
}

const GlobalContext = createContext<ContextProps>({
  userId: 0,
  setUserId: (): number => 0,
  cartId: 0,
  setCartId: (): number => 0,

  productsGlobal: [],
  setProductsGlobal: (): ProductType[] => []
})

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [userId, setUserId] = useState(0)
  const [cartId, setCartId] = useState(0)
  const [productId, setProductId] = useState(0)
  const [productQuantity, setProductQuantity] = useState(0)
  const [productsGlobal, setProductsGlobal] = useState<ProductType[]>([])

  return (
    <GlobalContext.Provider
      value={{
        userId,
        setUserId,
        cartId,
        setCartId,
        productsGlobal,
        setProductsGlobal
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
