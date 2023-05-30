'use client'

import { Saira_Stencil_One } from 'next/font/google'
import styled from "styled-components"
import Bag from './Bag'
import SearchBar from './SearchBar'

const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
})

const TagHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 19px 160px;
    background-color: var(--bg-secondary-color);

    @media (max-width: 954px) {
    justify-content: center;

  }

`

const Logo = styled.a`
    font-size: 40px;
    line-height: 60px;
    color: #5D5D6D;
    cursor: pointer;
    text-decoration: none;

`
const SearchInputAndBagConatiner = styled.div`
    display: flex;
    gap: 20px;
`

export default function Header() {
    return (
        <TagHeader>
            <Logo href='/' className={sairaStencil.className}>capputeeno</Logo>
            <SearchInputAndBagConatiner>
                <SearchBar />
                <Bag />
            </SearchInputAndBagConatiner>
        </TagHeader>
    )
}