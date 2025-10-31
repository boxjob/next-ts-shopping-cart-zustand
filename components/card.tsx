'use client'
import { IProduct } from '@/data/products'
import { useCartStore } from '@/store/useCartStore'
import Image from 'next/image'
import Link from 'next/link'
import { BsFillBagPlusFill } from 'react-icons/bs'

export const Card = ( product:IProduct ) => {
  
  const { cart, AddToCart } = useCartStore()

  return (
    <div className='p-8 bg-white rounded-2xl flex flex-col justify-between text-zinc-500'>
        <Link href={ product.slug } className='flex flex-col items-center'>
            <Image src={ product.image } width={400} height={400} alt={ product.name } className='object-cover object-center drop-shadow-[0_80px_30px_#0007]' />
            <h2 className='text-2xl font-medium line-clamp-2 mt-4 text-center'>{ product.name }</h2>
        </Link>
        <div className='flex items-center justify-between mt-8'>
            <p className='text-xl font-semibold'>${ product.price }</p>
            <button onClick={ () => AddToCart( product ) }>
                <BsFillBagPlusFill size={ 28 } className='text-zinc-500 hover:text-zinc-700 cursor-pointer' />
            </button>
        </div>
    </div>
  )
}
