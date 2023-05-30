import styled from "styled-components";
import BagIcon from "./BagIcon";

const BagButton = styled.button`
    background-color: var(--bg-secondary-color);
    border: none;
    position: relative;
    cursor: pointer
`

const ItemsOnBag = styled.span`
    position: absolute;
    right: -8px;
    bottom: 0px;
    width: 17px;
    height: 17px;
    border-radius: 100%;
    background-color: var(--exclude-color);
`
export default function Bag() {
    return (
        <BagButton>
            <BagIcon/>
            <ItemsOnBag>0</ItemsOnBag>
        </BagButton>
    )
}