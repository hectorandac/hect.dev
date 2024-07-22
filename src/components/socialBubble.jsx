import React, { useMemo } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import {
  FaGithub, FaStackOverflow, FaLinkedinIn, FaInstagram, FaTwitter,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

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
`;

export default function SocialBubble() {
  const item = {
    visible: { opacity: 1, transition: { delay: 1.5 } },
    hidden: { opacity: 0 },
  };

  const iconContextValue = useMemo(() => ({
    color: '#DCF1F9',
    size: '24px',
    className: 'global-icon-style',
  }), []);

  return (
    <Container initial="hidden" animate="visible" variants={item}>
      <IconContext.Provider value={iconContextValue}>
        <FaGithub onClick={() => window.open('https://github.com/hectorandac')} />
        <FaStackOverflow onClick={() => window.open('https://stackoverflow.com/users/10230161/hector-acosta?tab=profile')} />
        <FaLinkedinIn onClick={() => window.open('https://www.linkedin.com/in/hector-acosta-213388106/')} />
        <FaInstagram onClick={() => window.open('https://www.instagram.com/hectorandac/')} />
        <FaTwitter onClick={() => window.open('https://twitter.com/HectorAndAc')} />
      </IconContext.Provider>
    </Container>
  );
}
