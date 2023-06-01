import useProducts from "@/hooks/useProducts"
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
                <ProductCard
                    key={product.id}
                    {...product}
                />
            )}
        </List>
    )
}