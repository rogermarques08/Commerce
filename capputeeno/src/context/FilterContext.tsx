'use client'

import { FilterType } from "@/types/FilterType";
import { ReactNode, createContext, useState } from "react";

interface Children {
    children: ReactNode
}

export const FilterContext = createContext({type: FilterType.ALL, setType: (type: FilterType) => {}})

export default function FilterProvider ({children}: Children) {
    const [type, setType] = useState(FilterType.ALL)

    return (
        <FilterContext.Provider value={{type, setType}}>
            {children}
        </FilterContext.Provider>
    )
}