'use client'

import { FilterContext } from "@/context/FilterContext"
import { OrderType } from "@/types/OrderType"
import { useContext, useState } from "react"
import styled from "styled-components"
import ArrowIcon from "./ArrowIcon"

const OrderContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const OrderButton = styled.button`
    background-color: var(--bg-primary-color);
    border: none;
    font-family: inherit;
    color: var(--text-dark);
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 121px;
    height: 24px;
`
const OrderList = styled.ul`
    list-style: none;
    width: 176px;
    height: 132px;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 12px 16px;

    li {
        padding-top: 5px;
        cursor: pointer;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: var(--text-dark);
    }
`
export default function OrderBy() {
    const {order, setOrder} = useContext(FilterContext)
    const [isVisible, setIsVisble] = useState(false)

    const handleOrder = (order: OrderType) => {
        setOrder(order)
        setIsVisble(false)
    }

    return (
        <OrderContainer>
            <OrderButton onClick={() => setIsVisble((prev) => !prev)}>
                Organizar por
                {' '}
                {' '}
                <ArrowIcon />
            </OrderButton>
            {isVisible && (
                <OrderList>
                    <li onClick={() => handleOrder(OrderType.NEW)}>Novidades</li>
                    <li onClick={() => handleOrder(OrderType.BIGGEST_PRICE)}>Preço: Maior - menos</li>
                    <li onClick={() => handleOrder(OrderType.LOWEST_PRICE)}>Preço: Menor - maior</li>
                    <li onClick={() => handleOrder(OrderType.BEST_SALLERS)}>Mais vendidos</li>
                </OrderList>
            )}
        </OrderContainer>
    )
}