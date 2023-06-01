import styled from "styled-components";
import BagIconWhite from "./BagIconWhite";

const AddBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    border: none;
    width: 100%;
    height: 44px;
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    cursor: pointer;
    color: var(--text-white);
    background-color: var(--brand-blue);
    border-radius: 4px;
`
export default function AddCartBtn() {
    return (
        <AddBtn>
            <BagIconWhite />
            Adicionar ao carrinho
        </AddBtn>
    )
}