'use client'
import CheckoutCard from "@/components/CheckoutCart"
import OrderSummary from "@/components/OrderSummary"
import useLocalStorage from "@/hooks/useLocalStorage"
import styled from "styled-components"

const CheckoutContainer = styled.section`
    padding: 20px 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px
`

const CardsConainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export default function Checkout() {
    const { cart } = useLocalStorage('user-cart')
    return (
        <CheckoutContainer>
            <CardsConainer>
                {cart.map((product, index) => (
                    <CheckoutCard {...product} key={index} />
                ))}
            </CardsConainer>
            <OrderSummary />
        </CheckoutContainer>
    )
}