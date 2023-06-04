import { CheckoutContext } from "@/context/CheckoutContext";
import { Product } from "@/data/Promises";
import { useCallback, useContext, useEffect } from "react";

export default function useLocalStorage(key: string) {
    const {cart, setCart} = useContext(CheckoutContext)
    const storage = localStorage.getItem(key)

    // const getLocalStorage = (): Product[] | void => {

    //     if (storage !== null) {
    //         return JSON.parse(storage)
    //     }

    //     return console.log('Informe uma chave válida');
    // }

    const getLocalStorage = useCallback(() => {
        if (storage !== null) {
            return JSON.parse(storage)
        }

        return console.log('Informe uma chave válida');
    }, [storage])
    
    useEffect(() => {
        const cartItems = getLocalStorage()

        if (cartItems) {
            return setCart(cartItems)
        }
        
    }, [setCart, getLocalStorage])

    const setLocalStorage = (value: Product) => {
        const cart = getLocalStorage()
        if (storage && cart) {
            const newCart = [...cart, value]
            setCart(newCart)
            return localStorage.setItem(key, JSON.stringify(newCart))
        }
        setCart([value])
        return localStorage.setItem(key, JSON.stringify([value]))
    }

    return {
        cart,
        setLocalStorage
    }

}