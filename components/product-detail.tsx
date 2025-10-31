'use client'
import { IProduct, products } from '@/data/products'
import { useCartStore } from '@/store/useCartStore'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export const ProductDetail = ({ data }: { data: string }) => {
    const { AddToCart } = useCartStore()
    const [detail, setDetail] = useState<IProduct>()
    const [quantity, setQuantity] = useState(1)
    
    useEffect(() => {
        const findDetail = products.filter(item => item.slug === data)
        setDetail(findDetail[0])
    }, [data])

    const handleMinusQuantity = () => {
        setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
    }

    const handlePlusQuantity = () => {
        setQuantity(quantity + 1)
    }

    const handleAddToCart = () => {
        if (!detail) return
        AddToCart( detail, quantity )
    }

    return (
        <article className='max-w-6xl mx-auto grid grid-rows-1 md:grid-cols-2 gap-5 mt-5 text-gray-600'>
            <div>
                {detail?.image &&
                    <Image
                        src={detail?.image}
                        width={500}
                        height={500}
                        alt={detail?.name}
                        loading="eager"
                        className="w-full drop-shadow-[0_80px_30px_#0007]"
                    />
                }
            </div>
            <div className='flex flex-col gap-5 md:mt-8 lg:mt-16'>
                <h1 className="text-2xl text-center md:text-left lg:text-4xl uppercase font-bold">{detail?.name}</h1>
                <p className="font-bold text-5xl text-zinc-600 text-center py-3 md:text-left">${ detail && ( detail?.price * quantity) } </p>
                <div className='flex items-center justify-center md:justify-start  gap-5'>
                    <div className='flex gap-2 items-center border border-zinc-300 rounded-lg'>
                        <button
                            onClick={handleMinusQuantity}
                            className='px-2 py-0 text-xl rounded-lg bg-zinc-100 transition'
                        >
                            -
                        </button>
                        <span className='text-center py-1 text-2xl w-12 rounded-lg bg-zinc-100 font-semibold'>{quantity}</span>
                        <button
                            onClick={handlePlusQuantity}
                            className='px-2 py-0 text-xl rounded-lg bg-zinc-100 transition'
                        >
                            +
                        </button>
                    </div>
                    <button
                        onClick={ handleAddToCart }
                        className="bg-zinc-700 text-white px-7 py-3 rounded-xl shadow-2xl cursor-pointer hover:bg-zinc-600">
                        Add To Cart
                    </button>
                </div>
                <p>{detail?.description}</p>
            </div>
        </article>
    )
}
