'use client'
import data from "@/data/db"
import styled from "styled-components"
import { ProductCard } from "./ProductCard"

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    
`
export function ProductList() {
    return (
        <List>
            {data.allProducts?.map(product =>
                <ProductCard
                    key={product.id}
                    {...product}
                />
            )}
        </List>
    )
}