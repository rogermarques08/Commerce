'use client'
import BackButton from "@/components/BackButton"
import CheckoutCard from "@/components/CheckoutCart"
import OrderSummary from "@/components/OrderSummary"
import useLocalStorage from "@/hooks/useLocalStorage"
import getTotal from "@/utils/getTotal"
import styled from "styled-components"

const CheckoutContainer = styled.section`
    padding: 20px 30px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px
`

const CardsConainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;

    > h1 {
        font-weight: 500;
        font-size: 24px;
        margin-top: -20px;
        color: var(--selected-color)

    }

    p {
        font-weight: 300;
        font-size: 16px;
        color: var(--selected-color)

    }

    p span {
        color: var(--text-dark-2);
        font-weight: 500;
    }
`

export default function Checkout() {
    const { cart } = useLocalStorage('user-cart')
    console.log('renderizou')
    return (
        <CheckoutContainer>
            <CardsConainer>
                <BackButton />
                <h1>SEU CARRINHO</h1>
                <p>Total ({cart.length} produtos) <span>R$ {getTotal(cart).toFixed(2)}</span></p>
                {cart.map((product, index) => (
                    <CheckoutCard {...product} key={index} />
                ))}
            </CardsConainer>
            <OrderSummary />
        </CheckoutContainer>
    )
}