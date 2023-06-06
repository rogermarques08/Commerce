'use client'

import { CartItem } from "@/hooks/useLocalStorage";
import { ReactNode, createContext, useState } from "react";

interface Children {
    children: ReactNode
}

export const CheckoutContext = createContext({
    cart: [] as CartItem[],
    setCart: (product: CartItem[]) => { }
})

export default function CheckoutProvider({ children }: Children) {
    const [cart, setCart] = useState<CartItem[]>([]);

    return (
        <CheckoutContext.Provider
            value={
                {
                    cart,
                    setCart
                }
            }
        >
            {children}
        </CheckoutContext.Provider>
    )
}