'use client'

import { useRouter } from "next/navigation";
import styled from "styled-components";
import BackIcon from "../icons/BackIcon";

const BackBtn = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 72px;
    height: 24px;
    margin: 25px 0;
    border: none;
    cursor: pointer;
    background-color: inherit;
    color: var(--text-dark-1);
    font-weight: 500;
    font-size: 14px;

    :hover {
        color: var(--selected-color);
        font-weight: 600;
    }
`

export default function BackButton() {
    const history = useRouter()
    return (
        <BackBtn onClick={() => history.push('/')}>
            <BackIcon/>
            Voltar
        </BackBtn>
    )
}