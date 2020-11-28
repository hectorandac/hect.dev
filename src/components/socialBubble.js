import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FaGithub, FaStackOverflow, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion"

const Container = styled(motion.div)`
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
    const item = {
        visible: { opacity: 1, transition: { delay: 1.5 } },
        hidden: { opacity: 0 },
    }
    return <Container initial="hidden" animate="visible" variants={item}>
        <IconContext.Provider value={{ color: "#DCF1F9", size: "24px", className: "global-icon-style" }}>
            <FaGithub/>
            <FaStackOverflow/>
            <FaLinkedinIn/>
            <FaInstagram/>
            <FaTwitter/>
        </IconContext.Provider>
    </Container>
}