'use client'
import Image from "next/image";
import React from "react";
import styled from "styled-components";

export interface Product {
    id: string;
    name: string;
    price_in_cents: number;
    category: string;
    image_url: string;
    sales: number;
    description: string;
};

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 256px;
    height: 300px;
    border-radius: 8px 8px 4px 4px;
    background: var(--card-color);
    backdrop-filter: blur(10px);
    cursor: pointer;
    

    > img {
        border-radius: 8px 8px 0px 0px;
        width: 100%
    }

    > div {
        padding: 5px 12px;
    }

    > div > h3 {
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: var(--selected-color)
    }

    > div > span {
        display: block;
        height: 1px;
        width: 100%;
        background-color: #DCE2E6;
        margin: 5px 0;
    }

    > div > p {
        font-weight: 600;
        font-size: 14px;
        line-height: 150%;
        color: var(--text-dark-2);
    }

    @media (max-width: 580px) {
        width: 160px;
        height: 245px;
    }

   
    @media (max-width: 450px) {
        width: 135px;
        height: 220px;

        > div > h3 {
            font-size: 15px;
        }
    }
`

function ProductCard(product : Product){

    return(
        <Card>
            <Image src={product.image_url} alt={product.name} width={256} height={300}/>
            <div>
                <h3>{product.name}</h3>
                <span></span>
                <p>R$ {(product.price_in_cents / 100).toFixed(2)}</p>
            </div>
        </Card>
    )
} 

export default React.memo(ProductCard)