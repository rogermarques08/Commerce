'use client'

import BackButton from "@/components/BackButton";
import ProductInfo from "@/components/ProductInfo";
import data from "@/data/db";
import Image from "next/image";
import styled from "styled-components";

export async function generateStaticParams() {

    return data.allProducts.map((product) => ({
        productId: product.id
    }));
}

function getProduct(id: string) {
    return data.allProducts.filter((product) => product.id === id)[0]
}

const ProductContainer = styled.section`
    padding: 0 160px;

     @media (max-width: 756px) {
        padding: 0 20px;

   
    }   
`

const ProductInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;

    @media (max-width: 1238px) {
        justify-content: center;
    } 
    
    @media (max-width: 756px) {
        padding: 0 20px;

        
        > img {
            width: 290px;
            height: 290px;
        }
    }   
`

export default function Product({ params }: { params: { productId: string } }) {
    const product = getProduct(params.productId)
    
    return (
        <ProductContainer>
            <BackButton />
            <ProductInfoContainer>
                <Image src={product.image_url} alt={product.name} width={440} height={380} />
                <ProductInfo {...product} />
            </ProductInfoContainer>
        </ProductContainer>
    )
}