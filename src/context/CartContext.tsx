import { createContext, type ReactNode, useContext, useState } from 'react'

export type CartItem = {
  id: number
  title: string
  price: number
  oldPrice?: number
  image: string
  qty: number
  color?: string
  weight?: string
}

type CartContextType = {
  items: CartItem[]
  addToCart: (item: CartItem) => void
  removeItem: (id: number) => void
  updateQty: (id: number, change: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([])

  const addToCart = (newItem: CartItem) => {
    setItems((prev) => {
      const exist = prev.find((i) => i.id === newItem.id)
      if (exist) {
        return prev.map((i) => (i.id === newItem.id ? { ...i, qty: i.qty + newItem.qty } : i))
      }
      return [...prev, newItem]
    })
  }

  const removeItem = (id: number) => setItems((prev) => prev.filter((i) => i.id !== id))

  const updateQty = (id: number, change: number) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty + change) } : i)))

  return <CartContext.Provider value={{ items, addToCart, removeItem, updateQty }}>{children}</CartContext.Provider>
}
