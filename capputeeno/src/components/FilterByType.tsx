import { FilterContext } from "@/context/FilterContext"
import { FilterType } from "@/types/FilterType"
import { useContext } from "react"
import styled from "styled-components"

interface SelectedProps {
    selected: boolean
}

const FilterList = styled.ul`
    list-style: none;
    display: flex;
    gap: 40px;
`
const ListItem = styled.li<SelectedProps>`
    font-family: inherit;
    font-size: 16px;
    line-height: 22px;
    cursor: pointer;
    width: max-content;
    
    border-bottom: ${props => props.selected ? '4px solid var(--orange-low)' : ''};
    color: ${props => props.selected ? 'var(--selected-color)' : 'var(--text-dark)'};
    font-weight: ${props => props.selected ? '600' : '400'};

    transition: all 0.1s;

    @media (max-width: 450px) {
    font-size: 11px;

  }
`

export default function FilterByType() {
    const { type, setType, setSearch } = useContext(FilterContext)

    const teste = (type: FilterType) => {
        setType(type)
        setSearch('')
    }

    return (
        <FilterList>
            <ListItem
                selected={type === FilterType.ALL}
                onClick={() => teste(FilterType.ALL)}
            >
                TODOS OS PRODUTOS
            </ListItem>
            <ListItem
                selected={type === FilterType["T-SHIRTS"]}
                onClick={() => teste(FilterType["T-SHIRTS"])}
            >
                CAMISETAS
            </ListItem>
            <ListItem
                selected={type === FilterType.MUGS}
                onClick={() => teste(FilterType.MUGS)}
            >
                CANECAS
            </ListItem>
        </FilterList>
    )
}