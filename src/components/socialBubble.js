import React from "react"
import styled from "styled-components"
import { IconContext } from "react-icons";
import { FaGithub, FaStackOverflow, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const Container = styled.div`
    position: fixed;
    bottom: 24px;
    left: 24px;
    border-radius: 24px;
    padding: 8px;
    backdrop-filter: brightness(1.5) blur(5px);
    display: flex;
    flex-direction: row;
    z-index: 5;
`

export default function SocialBubble() {
    return <Container>
        <IconContext.Provider value={{ color: "#FFFAFF", size: "24px", className: "global-icon-style" }}>
            <FaGithub/>
            <FaStackOverflow/>
            <FaLinkedinIn/>
            <FaInstagram/>
            <FaTwitter/>
        </IconContext.Provider>
    </Container>
}