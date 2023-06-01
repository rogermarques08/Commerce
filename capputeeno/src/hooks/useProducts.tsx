import { FilterContext } from "@/context/FilterContext";
import data from "@/data/db";
import { FilterType } from "@/types/FilterType";
import { OrderType } from "@/types/OrderType";
import { useContext } from "react";

export default function useProducts () {
    const {search,type, order} = useContext(FilterContext)

    const filter = data.allProducts.filter((product) => {
        if(type === 0) return data

        return product.category.toUpperCase() === FilterType[type]
        
    }).sort((a, b) => {
        if (OrderType[order] === 'BIGGEST_PRICE') return b.price_in_cents - a.price_in_cents

        if (OrderType[order] === 'LOWEST_PRICE') return a.price_in_cents - b.price_in_cents 

        if (OrderType[order] === 'BEST_SALLERS') return b.sales - a.sales

        return 0
        
    }).filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))

    return filter
}