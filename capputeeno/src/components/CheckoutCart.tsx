import { Product } from "@/data/Promises";
import Image from "next/image";
import styled from "styled-components";
import TrashIcon from "../icons/TrashIcon";

const CardConatiner = styled.div`
    display: flex;
    gap: 32px;
    line-height: 150%;
    border-radius: 8px;
    width: 736px;
    height: 211px;
    background-color: var(--bg-secondary-color);
    color: var(--text-dark);

    @media (max-width: 810px) {
        width: 100%;
        height: 211px;
    }

    @media (max-width: 580px) {
        width: 100%;
        height: 160px;
        gap: 10px;
        
        img {
            width: 150px;
            height: 160px;
        }
    }

    @media (max-width: 380px) {
        width: 100%;
        height: 150px;
        gap: 10px;
        
        img {
            width: 120px;
            height: 150px;
        }
    }

`

const CardInfo = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 16px 24px 0;

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
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

    @media (max-width: 580px) {
        padding: 2px 4px 2px 0;

        > div > h2 {
            font-size: 14px;
        }

        p {
        overflow-x: hidden;
        height: 40px;
        font-size: 12px;
        }

        > div > select {
        width: 45px;
        height: 30px;
        }

        > div > h3 {
            font-size: 14px;
        }
    }
`

export default function CheckoutCard(product: Product) {
    return (
        <CardConatiner>
            <Image src={product.image_url} alt={product.name} width={256} height={211} style={{borderRadius: '8px 0 0 8px'}} />
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