import React from 'react'
import styled from "styled-components"

function Note({ data }) {
    return (
        <Wrapper>
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
`

export default Note
