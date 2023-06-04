'use client'

import { Product } from "@/data/Promises";
import { ReactNode, createContext, useState } from "react";

interface Children {
    children: ReactNode
}

export const CheckoutContext = createContext({
    cart: [] as Product[],
    setCart: (product: Product[]) => { }
})

export default function CheckoutProvider({ children }: Children) {
    const [cart, setCart] = useState<Product[]>([]);

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