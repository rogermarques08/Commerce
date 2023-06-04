import { Product } from "@/data/Promises";
import Image from "next/image";
import styled from "styled-components";
import TrashIcon from "./Emails/TrashIcon";

const CardConatiner = styled.div`
    display: flex;
    gap: 32px;
    line-height: 150%;
    border-radius: 8px;
    width: 736px;
    height: 211px;
    background-color: var(--bg-secondary-color);
    color: var(--text-dark)

`

const CardInfo = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 16px 24px 0;

    > div {
        display: flex;
        justify-content: space-between;
    }

    > div > h2 {
        font-weight: 300;
        font-size: 20px;
    }

    > div > button {
        background-color: inherit;
        border: none;
        cursor: pointer;
    }

    p {
        font-weight: 400;
        font-size: 12px;
        line-height: 18px
    }

    > div > select {
        background-color: #F3F5F6;
        border: 1px solid #A8A8B3;
        border-radius: 8px;
        width: 65px;
        height: 40px;
        font-weight: 400;
        font-size: 16px;
        text-align: center;
        color: var(--text-dark);
    }

    > div > h3 {
        font-weight: 600;
        font-size: 16px;
        color: var(--text-dark-2)
    }
`

export default function CheckoutCard(product: Product) {
    return (
        <CardConatiner>
            <Image src={product.image_url} alt={product.name} width={256} height={211} style={{borderRadius: '8px 0 0 8px'}}/>
            <CardInfo>
                <div>
                    <h2>{product.name}</h2>
                    <button>
                        <TrashIcon />
                    </button>
                </div>
                <p>{product.description}</p>
                <div>
                    <select name="quantity" id="quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <h3>R$ {(product.price_in_cents / 100).toFixed(2)}</h3>
                </div>
            </CardInfo>
        </CardConatiner>
    )
}