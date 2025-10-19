import React, { createContext, useContext, useState } from 'react'

export type CartItem = {
  id: number
  title: string
  price: number
  oldPrice?: number
  image: string
  qty: number
}

type CartContextType = {
  cart: CartItem[]
  isOpen: boolean
  toggle: () => void
  addToCart: (item: Omit<CartItem, 'qty'>) => void
  removeFromCart: (id: number) => void
  updateQty: (id: number, qty: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const addToCart = (item: Omit<CartItem, 'qty'>) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === item.id)
      if (exists) {
        return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + 1 } : p))
      }
      return [...prev, { ...item, qty: 1 }]
    })
    setIsOpen(true)
  }

  const removeFromCart = (id: number) => setCart((prev) => prev.filter((p) => p.id !== id))

  const updateQty = (id: number, qty: number) => setCart((prev) => prev.map((p) => (p.id === id ? { ...p, qty } : p)))

  return <CartContext.Provider value={{ cart, isOpen, toggle, addToCart, removeFromCart, updateQty }}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
