'use client'

import styled from "styled-components";
import FilterByType from "./FilterByType";
import OrderBy from "./OrderBy";

const FiltersContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
    gap: 10px;
    width: 100%;

    @media (max-width: 860px) {
        justify-content: center;

  }
`

export default function Filters () {
    return(
        <FiltersContainer>
            <FilterByType/>
            <OrderBy/>
        </FiltersContainer>
    )
}