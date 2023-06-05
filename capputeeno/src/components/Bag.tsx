'use-client'

import useLocalStorage from "@/hooks/useLocalStorage";
import Link from "next/link";
import styled from "styled-components";
import BagIcon from "../icons/BagIcon";

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
    font-weight: 500;
    color: #fff;
    background-color: var(--exclude-color);
`
export default function Bag() {
    const { cart } = useLocalStorage('user-cart')

    return (
        <BagButton>
            <Link href='/checkout'>
                <BagIcon />
            </Link>
            <ItemsOnBag>{cart?.length || 0}</ItemsOnBag>
        </BagButton>
    )
}