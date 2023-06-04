'use client'
import CheckoutCard from "@/components/CheckoutCart"
import useLocalStorage from "@/hooks/useLocalStorage"
import styled from "styled-components"

const CheckoutContainer = styled.section`
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export default function Checkout() {
    const { cart } = useLocalStorage('user-cart')
    return (
        <CheckoutContainer>
            {cart.map((product, index) => (
                <CheckoutCard {...product} key={index}/>
            ))}
        </CheckoutContainer>
    )
}