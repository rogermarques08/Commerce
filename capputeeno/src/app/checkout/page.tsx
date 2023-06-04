'use client'
import useLocalStorage from "@/hooks/useLocalStorage"

export default function Checkout() {
    const { cart } = useLocalStorage('user-cart')
    return (
        <>
            {cart?.map((product) => (
                <div key={product.id}>
                    <h1>{product.name}</h1>
                </div>
            ))}
        </>
    )
}