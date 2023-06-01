import styled from "styled-components";
import AddCartBtn from "./AddCartBtn";
import { Product } from "./ProductCard";

const InfoContainer = styled.div`
    width: 448px;
    height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: var(--selected-color);
    line-height: 150%;

    > h3 {
        font-weight: 400;
        font-size: 16px;
    }

    > h1 {
        font-weight: 300;
        font-size: 32px;
    }

    >span {
        font-weight: 600;
        font-size: 20px;
        color: var(--text-dark-2)
    }

    > p {
        font-weight: 400;
        font-size: 12px;
    }

    > h2 {
        font-weight: 500;
        font-size: 16px;
        color: var(--text-dark)
    }
`

export default function ProductInfo (product: Product) {
    return(
        <InfoContainer>
            <h3>{product.category}</h3>
            <h1>{product.name}</h1>
            <span>R$ {(product.price_in_cents / 100).toFixed(2)}</span>
            <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
            <h2>DESCRIÇÃO</h2>
            <p>{product.description}</p>
            <AddCartBtn />
        </InfoContainer>
    )
}