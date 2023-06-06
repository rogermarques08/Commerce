import { CartItem } from "@/hooks/useLocalStorage";

export default function getTotal(cartItems:CartItem[]): number {
    const sumTotal = cartItems.reduce((acc, curr) => acc + (curr.price_in_cents / 100) * curr.quantity, 0)

    return sumTotal
}