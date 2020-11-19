import { Squeeze as Hamburger } from 'hamburger-react'
import React, { useState } from "react"
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

const MenuItem = styled.div`
font-family: Inconsolata, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
color: #FFFAFF;
margin: 0 12px;
transition: .5s;
cursor: pointer;

:hover {
    color: #FFC247;
}

::before {
    content: '${props => props.label}';
    color: #FFC247;
    margin-right: 4px;
}
`

const MobileMenuItem = styled(MenuItem)`
    font-size: 18px;
    margin-bottom: 16px;
`

const Container = styled.div`
display: flex;
flex-direction: row;
position: relative;
`

const MobileMenu = styled.div`
position: fixed;
height: 100%;
width: calc(100vw - 88px);
right: calc((100vw - 88px) * ${props => props.hide ? -1 : 0} - 1.45rem);
top: -1.45rem;
z-index: 10;
background-color: #0C3745;
transition: .5s;
padding-top: 94px;
padding-left: 16px;
`

const MenuButton = styled.div`
z-index: 20;
`

export default function Menu() {
    const [isActive, setActive] = useState(false)
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 600px)' })
    return <Container>
        {isDesktopOrLaptop && <>
            <MenuItem label="01.">About</MenuItem>
            <MenuItem label="02.">Experience</MenuItem>
            <MenuItem label="03.">Work</MenuItem>
            <MenuItem label="04.">Contact</MenuItem>
        </>}
        {isTabletOrMobile && <>
            <MenuButton><Hamburger style={{zIndex: 20}} toggled={isActive} toggle={setActive} color="#FFC247"/></MenuButton>

            <MobileMenu hide={!isActive}>
                <MobileMenuItem label="01.">About</MobileMenuItem>
                <MobileMenuItem label="02.">Experience</MobileMenuItem>
                <MobileMenuItem label="03.">Work</MobileMenuItem>
                <MobileMenuItem label="04.">Contact</MobileMenuItem>
            </MobileMenu>
        </>}
    </Container>
}