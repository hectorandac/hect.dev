import React from "react"
import styled from "styled-components"

const Container = styled.div`
width: 100%;
max-width: 1000px;
padding: 24px;
min-height: 100vh;
color: white;
display: flex;
flex-direction: column;
justify-content: center;
justify-items: center;
align-content: center;
align-items: flex-start;
`

export default function Section({ children }) {
    return <Container>
        { children }
    </Container>
}