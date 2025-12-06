'use client'
import { ICartItem, useCartStore } from '@/store/useCartStore'
import Image from 'next/image'
import { MdRemoveShoppingCart } from 'react-icons/md'

interface ICartItemStatus {
    cart:ICartItem
}

export const CartItem = ({ cart }:ICartItemStatus) => {
    const {  IncQauntity, DecQauntity, RemoveCart } = useCartStore()
    const cost = (cart.quantity * cart.price).toFixed(2)
    return (

        <li className='flex justify-between items-center gap-2 bg-zinc-500 text-white px-2 py-2 mb-4 border-b border-zinc-700 rounded-md overflow-hidden'>
            <Image src={cart.image} width={60} height={90} alt={cart.name} className='w-16' />
            <h3 className='text-sm line-clamp-2'>{cart.name}</h3>
            <p className='text-sm text-center font-bold'>${ cost }</p>
            
            <div className='flex gap-1 items-center'>
                <button onClick={() => DecQauntity(cart.id)} className='bg-gray-200 rounded-full w-5 h-5 flex justify-center items-center font-bold text-gray-600'>-</button>
                <span className='text-sm'>{ cart.quantity }</span>
                <button onClick={() => IncQauntity(cart.id)} className='bg-gray-200 rounded-full w-5 h-5 flex justify-center items-center font-bold text-gray-600'>+</button>
            </div>

            <button onClick={() => RemoveCart(cart.id)} className='bg-zinc-700 hover:bg-zinc-900 cursor-pointer text-center flex items-center justify-center px-1 w-8 h-20 -mr-2 -my-4'>
                <MdRemoveShoppingCart />
            </button>
        </li>
    )
}
