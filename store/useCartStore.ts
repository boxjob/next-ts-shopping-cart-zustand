import { IProduct } from "@/data/products";
import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';

export interface ICartItem extends IProduct {
    quantity: number;
}

export interface ICart {
    cart: ICartItem[]
    openCart: boolean
    toggleCart: () => void
    AddToCart: (product: IProduct, quantity?: number) => void;
    RemoveCart: (id: number) => void
    IncQauntity: (id: number) => void
    DecQauntity: (id: number) => void
    ClearCart: () => void
    getTotalCost: () => number
}

export const useCartStore = create<ICart>()(
    persist(

        (set, get) => ({
            cart: [],
            openCart: false,
            

            toggleCart: () => set(state => ({
                openCart: !state.openCart
            })),

            AddToCart: (product, quantity = 1 ) => set(state => {
                const itemId = state.cart.find(item => item.id === product.id)
                if (itemId) {
                    return {
                        cart: state.cart.map(item => item.id === product.id
                            ? { ...item, quantity:item.quantity + quantity }
                            : item)
                    }
                }
                return { cart: [...state.cart, { ...product, quantity }] }
            }),

            RemoveCart: id => set(state => ({
                cart: state.cart.filter(item => item.id !== id)
            })),

            IncQauntity: id => set(state => ({
                cart: state.cart.map(item => item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item)
            })),

            DecQauntity: id => set(state => ({
                cart: state.cart.map(item => item.id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item).filter(item => item.quantity > 0)
            })),

            ClearCart: () => set(({ cart: [] })),

            getTotalCost: () => {
                const { cart } = get()
                return cart.reduce((total, item) => total + item.price * item.quantity, 0)
            },
        }),

        {
            name: 'cart-storage', 
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                cart: state.cart
            }),
        }

    )

)

