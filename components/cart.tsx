'use client'
import { useCartStore } from '@/store/useCartStore'
import { IoMdCart } from 'react-icons/io'
import { CartItem } from './cart-item'
import { useHasMounted } from '@/hook/useHasMounted'

export const Cart = () => {

  const { cart, openCart, toggleCart, ClearCart, RemoveCart, getTotalCost } = useCartStore()
  const totalCost = getTotalCost().toFixed(2)
  const hasMounted = useHasMounted()

  if (!hasMounted) return null

  return (
    <aside className={`fixed z-10 top-0 right-0 max-w-96 w-full bg-zinc-600 h-screen overflow-hidden overflow-y-auto flex flex-col justify-between drop-shadow-2xl transform duration-500
      ${openCart === false ? 'translate-x-full' : ''}      
    `}>
      <div className='px-4'>
        <h2 className='p-4 mt-4 mb-8 text-center flex items-center gap-3 text-zinc-300'>
          <IoMdCart size={24} />
          <span className='text-2xl font-bold'>Header.</span>
        </h2>
        <ul>
          {cart.length === 0
            ? <li className='flex flex-col items-center justify-center h-full'>
              <p className='text-7xl text-center text-zinc-700/40 font-semibold'>Your cart is empty</p>
            </li>
            : cart.map(item =>
              <CartItem key={item.id} cart={item} />
            )}
        </ul>
      </div>

      <div className='text-white'>
        <div className='grid grid-cols-2'>
          <button onClick={toggleCart} className='py-2 font-light bg-zinc-500 hover:bg-zinc-700 cursor-pointer'>Close</button>
          <button onClick={ClearCart} className='py-2 font-light bg-amber-600 cursor-pointer hover:bg-amber-800'>Clear Cart</button>
        </div>
        <div className='py-2 font-bold bg-zinc-800 text-center text-xl'>
          $ {totalCost && totalCost}
        </div>
      </div>
    </aside>
  )
}
