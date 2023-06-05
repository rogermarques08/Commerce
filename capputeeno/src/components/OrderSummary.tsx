import useLocalStorage from "@/hooks/useLocalStorage"
import getTotal from "@/utils/getTotal"
import styled from "styled-components"
import CheckoutBtn from "./CheckoutBtn"

const OrderSummaryContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 352px;
    height: 700px;
    padding: 16px;
    background-color: var(--bg-secondary-color);
    color: var(--selected-color)
`

const SummaryTitle = styled.h2`
    font-weight: 600;
    font-size: 20px;
`

const PriceInfos = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    font-weight: 400;
    font-size: 16px;
`

const TotalPrice = styled(PriceInfos)`
    font-weight: 600;

`

const Span = styled.span`
    display:block;
    width: 100%;
    height: 1px;
    border: 1px solid #DCE2E5; 
    margin-top: 30px
`

const HelpContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100px;
    color: var(--text-dark);
    font-weight: 500;
    font-size: 14px;
    text-decoration: underline;
`

export default function OrderSummary() {
    const { cart } = useLocalStorage('user-cart')

    return (
        <OrderSummaryContainer>
            <div>
                <SummaryTitle>RESUMO DO PEDIDO</SummaryTitle>
                <PriceInfos>
                    <p>Subtotal de produtos</p>
                    <p>R$ {getTotal(cart).toFixed(2)}</p>
                </PriceInfos>
                <PriceInfos>
                    <p>Entrega</p>
                    <p>R$ 40,00</p>
                </PriceInfos>
                <Span></Span>
                <TotalPrice>
                    <h3>Total</h3>
                    <h3>R$ {(getTotal(cart) + 40).toFixed(2)}</h3>
                </TotalPrice>
                <CheckoutBtn />
            </div>
            <HelpContainer>
                <p>AJUDA</p>
                <p>REEMBOLSO</p>
                <p>ENTREGAS E FRETE</p>
                <p>TROCAS E DEVOLUÇÕES</p>
            </HelpContainer>
        </OrderSummaryContainer>
    )
}