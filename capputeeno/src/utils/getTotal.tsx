import { Product } from "@/data/Promises";

export default function getTotal(cartItems:Product[]): number {
    const sumTotal = cartItems.reduce((acc, curr) => acc + (curr.price_in_cents / 100), 0)

    return sumTotal
}