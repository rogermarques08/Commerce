import useProducts from "@/hooks/useProducts"
import Link from "next/link"
import styled from "styled-components"
import { ProductCard } from "./ProductCard"

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    
`
export function ProductList() {
    const data = useProducts()
    
    return (
        <List>
            {!data.length && <h2>Produto não encontrado</h2>}
            {data?.map(product =>
                <Link href={`/product/${product.id}`} key={product.id} style={{textDecoration: 'none'}}>
                    <ProductCard
                        {...product}
                    />
                </Link>
            )}
        </List>
    )
}