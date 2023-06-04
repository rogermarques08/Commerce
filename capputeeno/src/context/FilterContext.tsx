'use client'

import { FilterType } from "@/types/FilterType";
import { OrderType } from "@/types/OrderType";
import { ReactNode, createContext, useState } from "react";

interface Children {
    children: ReactNode
}

export const FilterContext = createContext({
    type: FilterType.ALL,
    setType: (type: FilterType) => { },
    order: OrderType.NEW,
    setOrder: (order: OrderType) => { },
    search: '',
    setSearch: (search: string) => {}
})

export default function FilterProvider({ children }: Children) {
    const [type, setType] = useState(FilterType.ALL)
    const [order, setOrder] = useState(OrderType.NEW)
    const [search, setSearch] = useState('')

    return (
        <FilterContext.Provider
            value={
                {
                    type,
                    setType,
                    order,
                    setOrder,
                    search,
                    setSearch
                }
            }
        >
            {children}
        </FilterContext.Provider>
    )
}