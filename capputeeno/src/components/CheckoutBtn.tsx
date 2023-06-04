import styled from "styled-components"

const CheckoutButton = styled.button` 
    cursor: pointer;
    margin-top: 40px;
    border: none;
    width: 100%;
    height: 44px;
    background: #51B853;
    color: var(--text-white);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    border-radius: 4px;
`

export default function CheckoutBtn() {
    return(
        <CheckoutButton>Finalizar Compra</CheckoutButton>
    )
}