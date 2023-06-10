import useLocalStorage from "@/hooks/useLocalStorage";
import getTotal from "@/utils/getTotal";
import { useRouter } from "next/navigation";
import styled from "styled-components";

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
    const { clearLocalStorage, cart } = useLocalStorage('user-cart')
    const history = useRouter()

    const finishOrder = () => {
        window.alert(`Compra no valor de R$${(getTotal(cart) + 40).toFixed(2)} realizada com succeso!!`)

        history.push('/')
        
        setTimeout(() => {
            clearLocalStorage()
        }, 700)
    }

    return (
        <CheckoutButton onClick={finishOrder}>Finalizar Compra</CheckoutButton>
    )
}