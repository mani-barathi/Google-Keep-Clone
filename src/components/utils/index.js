import styled from "styled-components"

const Button = styled.button` 
    &{
        cursor: pointer;
        background-color: rgb(255, 208, 0);
        border-radius: 3px;
        padding: 0.3rem 0.6rem;
        transition: all 0.2s ease;
        color: rgb(36, 35, 35);
        margin-top: 0.5rem;
        user-select:none;
    }
    &:hover{
        background-color: rgb(255, 230, 0);
    }
    &:active{
        transform:scale(0.95);
    }
`

export {
    Button
}