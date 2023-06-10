import { CheckoutContext } from "@/context/CheckoutContext";
import { Product } from "@/data/Promises";
import { useCallback, useContext, useEffect } from "react";

export interface CartItem extends Product {
  quantity: number
}

export default function useLocalStorage(key: string) {
  const { cart, setCart } = useContext(CheckoutContext);
  const storage =
    typeof window !== 'undefined' ? localStorage.getItem(key) : null;

  const getLocalStorage = useCallback(() => {
    if (storage !== null) {
      return JSON.parse(storage);
    }

    return ;
  }, [storage]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const cartItems = getLocalStorage();

    if (cartItems) {
      setCart(cartItems);
    }
  }, [setCart, getLocalStorage]);

  const setLocalStorage = (quantity: number,value: Product) => {
    if (typeof window === 'undefined') return;

    const cartItem:CartItem = {...value, quantity}
    
    const cart = getLocalStorage();
    
    if (storage && cart) {
      const isOnCart = cart.some((product: CartItem) => product.id === value.id)

      if (isOnCart) {
        const newCart = cart.find((product: CartItem) => product.id === value.id)
        newCart.quantity = quantity

        setCart(cart);
        return localStorage.setItem(key, JSON.stringify(cart));
      }

      const newCart = [...cart, cartItem];
      setCart(newCart);
      return localStorage.setItem(key, JSON.stringify(newCart));
    }
    
    setCart([cartItem]);
    return localStorage.setItem(key, JSON.stringify([cartItem]));
  };

  const removeItemFromLocalStorage = (id:string) => {
    const filteredCart = cart.filter((product) => product.id !== id)

    setCart(filteredCart)
    localStorage.setItem('user-cart',JSON.stringify(filteredCart))
  }

  const clearLocalStorage = () => {
    localStorage.removeItem('user-cart')
    setCart([])
  }

  return {
    cart,
    setLocalStorage,
    removeItemFromLocalStorage,
    clearLocalStorage
  };
}
