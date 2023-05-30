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
    setOrder: (order: OrderType) => { }
})

export default function FilterProvider({ children }: Children) {
    const [type, setType] = useState(FilterType.ALL)
    const [order, setOrder] = useState(OrderType.NEW)

    return (
        <FilterContext.Provider
            value={
                {
                    type,
                    setType,
                    order,
                    setOrder
                }
            }
        >
            {children}
        </FilterContext.Provider>
    )
}