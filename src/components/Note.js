import React from 'react'
import styled from "styled-components"
import { useStateValue } from "../StateContext"

function Note({ id, data }) {
    const [, dispatch] = useStateValue()

    const openNote = () => {
        dispatch({ type: 'SET_EDITING_NOTE', payload: { id, data } })
    }

    return (
        <Wrapper onClick={openNote} >
            <Title>{data.title}</Title>
            <Text>{data.text}</Text>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    {   background-color: rgba(255, 255, 255, 0.763);
        width:100%;
        padding:1rem;
        border:1px solid rgb(200, 200, 200);
        border-radius:10px;
        cursor:pointer;
        transition: all 0.2s ease;
        max-height:198px;
        overflow:hidden;
    }
    &:hover{
        box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0,0,0,0.24);
    }
`
const Title = styled.h4`
    font-weight:500;
    white-space: nowrap;
    text-overflow: ellipsis;
    
`
const Text = styled.p`
    margin-top:0.5rem;
    word-wrap: break-word;
    margin-bottom: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:pre-wrap;
`

export default Note
