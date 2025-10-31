'use client'
import { useCartStore } from '@/store/useCartStore'
import Link from 'next/link'
import { IoMdCart } from 'react-icons/io'

export const Header = () => {

  const { cart, toggleCart } = useCartStore()

  return (
    <header className='fixed z-10 left-0 right-0 md:relative font-bold text-2xl'>
      <div className='flex justify-between items-center w-full relative px-4 sm:px-10 md:px-0'>
        <Link href='/' className='text-3xl text-zinc-600 hover:text-zinc-700'>
          Header.
        </Link>
        <button
          onClick={ toggleCart }
          className='bg-zinc-500 p-2 rounded-full flex justify-center items-center relative cursor-pointer'>
          <IoMdCart className='text-white' />
          <span className='absolute -bottom-3.5 -left-2 bg-red-500 w-6 h-6 rounded-full flex items-center justify-center text-sm text-white'>
            { cart.length }
          </span>
        </button>
      </div>
    </header>
  )
}
