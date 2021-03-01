import React from 'react'
import styled from "styled-components"

function Logos() {

    return (
        <Wrapper>
            <Logo src="https://www.google.com/images/icons/product/keep-512.png" alt="Keep logo" draggable="false" />

            <Row>
                <Logo small src="https://cdn.auth0.com/blog/react-js/react.png" draggable="false" title="React" />
                <Plus />
                <Logo small src="https://manzinello.dev/assets/images/faunadb.png" draggable="false" title="Fauna Db" />
                <Plus />
                <Logo small src="https://miro.medium.com/max/500/0*TwqQJI0YFBZEzjcV.png" draggable="false" title="Netlify" />
            </Row>
        </Wrapper>
    )

}

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Logo = styled.img`
  width: ${props => props.small ? "3rem" : "6rem"};
  height: ${props => props.small ? "3rem" : "6rem"};
  object-fit: contain;
  margin:0.5rem 1rem;
`
const Row = styled.div`
    display:flex;
    align-items:center;
`
const Plus = styled.span`
    &::before{
        content:"+";
        font-weight:700;
        font-size:1.2rem;
    }
`

export default Logos
