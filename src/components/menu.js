import { Squeeze as Hamburger } from 'hamburger-react'
import React, { useState } from "react"
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import { motion } from "framer-motion"

const MenuItem = styled(motion.div)`
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
height: calc(100vh + 1.45rem);
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

    const item = {
        visible: i => ({ opacity: 1, y: 0, transition: {delay: i * 0.5,}, }),
        hidden: { opacity: 0, y: -10 },
    }

    return <Container>
        {isDesktopOrLaptop && <>
            <MenuItem custom={0} initial="hidden" animate="visible" variants={item} label="01.">About</MenuItem>
            <MenuItem custom={1} initial="hidden" animate="visible" variants={item} label="02.">Experience</MenuItem>
            <MenuItem custom={2} initial="hidden" animate="visible" variants={item} label="03.">Work</MenuItem>
            <MenuItem custom={3} initial="hidden" animate="visible" variants={item} label="04.">Contact</MenuItem>
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