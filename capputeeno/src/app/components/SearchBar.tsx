import styled from "styled-components";
import SearchIcon from "./SearchIcon";

const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 352px;
    height: 42px;
    border-radius: 8px;
    background-color: #F3F5F6;

    @media (max-width: 450px) {
    width: 230px;

  }
`

const SearchInput = styled.input`
    background-color: #F3F5F6;
    border: none;
    padding: 10px 16px;
    width: 100%;
    font-family: inherit;
    font-weight: 300;
    border-radius: 8px;
`
const SpanIcon = styled.span`
    margin: 0 16px;
`
export default function SearchBar() {
    return (
        <SearchBarContainer>
            <SearchInput type="text" placeholder="Procurando por algo específico?" />
            <SpanIcon>
                <SearchIcon />
            </SpanIcon>
        </SearchBarContainer>
    )
}