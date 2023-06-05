import { CheckoutContext } from "@/context/CheckoutContext";
import { Product } from "@/data/Promises";
import { useCallback, useContext, useEffect } from "react";

export default function useLocalStorage(key: string) {
  const { cart, setCart } = useContext(CheckoutContext);
  const storage =
    typeof window !== 'undefined' ? localStorage.getItem(key) : null;

  const getLocalStorage = useCallback(() => {
    if (storage !== null) {
      return JSON.parse(storage);
    }

    return console.log('Informe uma chave válida');
  }, [storage]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const cartItems = getLocalStorage();

    if (cartItems) {
      setCart(cartItems);
    }
  }, [setCart, getLocalStorage]);

  const setLocalStorage = (value: Product) => {
    if (typeof window === 'undefined') return;

    const cart = getLocalStorage();
    if (storage && cart) {
      const newCart = [...cart, value];
      setCart(newCart);
      return localStorage.setItem(key, JSON.stringify(newCart));
    }
    setCart([value]);
    return localStorage.setItem(key, JSON.stringify([value]));
  };

  return {
    cart,
    setLocalStorage
  };
}
