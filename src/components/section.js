import React from "react"
import styled from "styled-components"

const Container = styled.div`
width: 100%;
max-width: 1000px;
padding: 24px;
color: white;
display: flex;
flex-direction: column;
justify-content: center;
justify-items: center;
align-content: center;
align-items: flex-start;
margin-bottom: 32px;
scroll-margin-top: 94px;
`

export default function Section({ id, children }) {
    return <Container id={id}>
        { children }
    </Container>
}